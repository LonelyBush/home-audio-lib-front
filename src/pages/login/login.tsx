"use client"

import { Button } from "@/shared/button/button"
import { Input } from "@/shared/input/input"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { loginSchema } from "./schema/loginSchema"
import { login } from "@/app/(actions)/auth/auth"


type SubmitData = {
    login: string;
    password: string;
}

export const Login = () => {

    const {register,handleSubmit, setError, formState} = useForm<SubmitData>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)})

     const onSubmit: SubmitHandler<SubmitData> = async (data) => {
        const resp = await login({login: data.login, password: data.password});
        if(resp && resp.statusCode){
            setError('root', {
                type: "response",
                message: resp.message
            } )
        }
     }

    return (
    <div className="flex self-center flex-col gap-y-5 container mx-auto p-5 max-w-120 rounded-md shadow-md bg-sky-50">
    <h3 className="text-3xl font-semibold font-sans text-indigo-500 text-center">Login</h3>
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-y-5"}>
        <Input {...register('login')} id="login" label="Login" type="text" placeholder="Enter your login" error={formState.errors.login} />
        <Input id="password" {...register('password')}label="Password" type="password" placeholder="Enter password" error={formState.errors.password} />
        <Button type="submit">Submit</Button>
    </form>
        {formState.errors.root && <p className="text-center text-md text-red-600 dark:text-red-500">{formState.errors.root.message}</p>}
        <p className="text-center">
            Dont have an account ? <Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-l" href="/registration">Sign up!</Link>
        </p>
    </div>)
}