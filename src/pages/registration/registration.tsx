import { Button } from "@/shared/button/button"
import { Input } from "@/shared/input/input"

export const Registration = () => {
    return (
    <div className="flex flex-col self-center gap-y-5 container mx-auto p-5 max-w-120 rounded-md shadow-md bg-sky-50">
    <h3 className="text-3xl font-semibold font-sans text-indigo-500 text-center">Sign Up</h3>
    <form className={"flex flex-col gap-y-5"}>
        <Input id="login" name="login" label="Login" type="text" placeholder="Enter your login" />
        <Input id="password" name="password" label="Password" type="password" placeholder="Enter password" />
        <Button type="submit">Submit</Button>
    </form>
    </div>)
}