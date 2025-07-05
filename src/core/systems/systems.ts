'use client'

import { refreshAccessToken } from "@/app/(actions)/auth/auth";
import { getJWTToken } from "@/app/(actions)/cookies/cookies";
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const {NEXT_PUBLIC_BASE_API_URL} = process.env

export const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_API_URL ?? 'http://localhost:4000',
  prepareHeaders: async (headers) => {
     const authResult = await getJWTToken();
     console.log(authResult);
     if (authResult) {
         headers.set("Authorization", 'Bearer '+ authResult.access_token);
         headers.set('Access-Control-Allow-Origin', '*');
     }
    return headers;
  },
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let response = await baseQuery(args, api, extraOptions);
  console.log(response);
  if (response.error && response.error.status === 401) {
    const refreshResponse = await refreshAccessToken();
    console.log(refreshResponse);
    if (refreshResponse?.ok) {
      response = await baseQuery(args, api, extraOptions);
    }
  }
  return response;
};
