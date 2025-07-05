"use server"

import { cookies } from "next/headers"

export const createSession = async ({access_token, refresh_token}: {access_token: string, refresh_token: string}) => {
    const cookieStore = await cookies();
    cookieStore.set('access_token', access_token, {
        httpOnly: true,
        secure: true,
        maxAge: 3600,
    });
    cookieStore.set('refresh_token', refresh_token, {
        httpOnly: true,
        secure: true,
        maxAge: 3600* 24,
    });
}

export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('access_token');
    cookieStore.delete('refresh_token');
}

export async function getJWTToken() {
  return {
    refresh_token: (await cookies()).get('refresh_token')?.value || '',
    access_token: (await cookies()).get('access_token')?.value || '',
  };
}