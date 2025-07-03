'use client'

import { Button } from "@/shared/button/button"
import { Input } from "@/shared/input/input"
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form"
import { registrationSchema } from "./schema/registrationSchema";
import { useRouter } from "next/navigation";
import { signup } from "@/app/(actions)/auth/auth";


type SubmitData = {
    login: string;
    password: string;
}

export const Registration = () => {
    const router = useRouter()


    const {register,handleSubmit, setError, formState} = useForm<SubmitData>({
        mode: 'onChange',
        resolver: yupResolver(registrationSchema)})

     const onSubmit: SubmitHandler<SubmitData> = async (data) => {
           const resp = await signup({login: data.login, password: data.password});
           if(resp && resp.statusCode){
            setError('root', {
                type: "response",
                message: resp.message
            } )
        } else {
            router.push('/login')
        }
     }

    return (
    <div className="flex flex-col self-center gap-y-5 container mx-auto p-5 max-w-120 rounded-md shadow-md bg-sky-50">
    <h3 className="text-3xl font-semibold font-sans text-indigo-500 text-center">Sign Up</h3>
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-y-5"}>
        <Input {...register('login')} id="login" label="Login" type="text" placeholder="Enter your login" error={formState.errors.login}/>
        <Input {...register('password')} id="password" label="Password" type="password" placeholder="Enter password" error={formState.errors.password}/>
        <Button type="submit">Submit</Button>
    </form>
    {formState.errors.root && <p className="text-center text-md text-red-600 dark:text-red-500">{formState.errors.root.message}</p>}
    </div>)
}