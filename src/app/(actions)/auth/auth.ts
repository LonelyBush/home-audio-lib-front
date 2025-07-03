"use server"

import { cookies } from "next/headers";
import { createSession } from "../cookies/cookies";

const {NEXT_PUBLIC_BASE_API_URL} = process.env

export const login = async (formData: {login: string, password: string}) => {
        try{
        const response = await fetch(`${NEXT_PUBLIC_BASE_API_URL ?? 'http://localhost:4000'}/auth/login`, {
            method: 'POST',
            headers: {
                    "Content-Type": "application/json",
                },
            body: JSON.stringify(formData),
        })
        if(response.ok){
            const result = await response.json();
            await createSession({access_token: result.accessToken, refresh_token: result.refreshToken});
            return result
        }
        const result = await response.json();
        return result;

        }catch(err) {
            console.error(err);
        }
}

export const signup = async (formData: {login: string, password: string}) => {
        try{
        const response = await fetch(`${NEXT_PUBLIC_BASE_API_URL ?? 'http://localhost:4000'}/auth/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(formData),
        })
        const result = await response.json();
        return result;

        }catch(err) {
           console.error(err);
        }
}

export const refreshAccessToken = async () => {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refresh_token');
    try {
    const response = await fetch(`${NEXT_PUBLIC_BASE_API_URL ?? 'http://localhost:4000'}/auth/refresh`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify({refreshToken: refreshToken}),
    })
        const result = await response.json();
        await createSession({access_token: result.accessToken, refresh_token: result.refreshToken});
        return result
    } catch(err) {
        console.error(err);
    }
}