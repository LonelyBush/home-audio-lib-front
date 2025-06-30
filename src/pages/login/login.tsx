import { Button } from "@/shared/button/button"
import { Input } from "@/shared/input/input"
import Link from "next/link"

export const Login = () => {
    return (
    <div className="flex self-center flex-col gap-y-5 container mx-auto p-5 max-w-120 rounded-md shadow-md bg-sky-50">
    <h3 className="text-3xl font-semibold font-sans text-indigo-500 text-center">Login</h3>
    <form className={"flex flex-col gap-y-5"}>
        <Input id="login" name="login" label="Login" type="text" placeholder="Enter your login" />
        <Input id="password" name="password" label="Password" type="password" placeholder="Enter password" />
        <Button type="submit">Submit</Button>
    </form>
        <p className="text-center">
            Dont have an account ? <Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-l" href="/registration">Sign up!</Link>
        </p>
    </div>)
}