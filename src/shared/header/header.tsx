import Link from "next/link"
import { Button } from "../button/button"

export const Header = () => {
    return <header className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-sky-50 via-blue-200 bg-blue-400">
        <div className="flex items-center gap-x-3">
        <h1 className="text-3xl font-semibold font-sans text-indigo-500">Audio<span className="font-normal text-black"font-semibold>Lib</span></h1>
        <nav className="hidden sm:flex justify-self-start">
            <ul className="flex items-center gap-x-3">
                <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-xl" href="/">Home</Link></li>
                <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-xl" href="/">Tracks</Link></li>
                <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-xl" href="/">Albums</Link></li>
                <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-xl" href="/">Artists</Link></li>
                <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-xl" href="/">Music</Link></li>
            </ul>
        </nav>
        </div>
        <Button type="button">Logout</Button>
    </header>
}