"use client"

import Link from "next/link"
import { Button } from "../button/button"
import { useState } from "react"
import { MobNavMenu } from "../MobNavMenu/MobNavMenu"

const navLinks = [
    {name: 'Home', href: '' },
      {name: 'Tracks', href: '' },
        {name: 'Albums', href: '' },
          {name: 'Artists', href: '' },
            {name: 'Music', href: '' },
]

export const Header = () => {
const [isShowMenu, setShowMenu] = useState<boolean>(false);

    return <><header className="relative  z-2 flex items-center justify-between w-full p-4 bg-gradient-to-r from-sky-50 via-blue-200 bg-blue-400">
        <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-sans text-indigo-500">Audio<span className="font-normal text-black" font-semibold>Lib</span></h1>
            <nav className="hidden md:flex justify-self-start">
                <ul className="flex items-center gap-x-3">
                    <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-bold hover:underline hover:underline-offset-2 text-xl" href="/">Home</Link></li>
                    <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-bold hover:underline hover:underline-offset-2 text-xl" href="/">Tracks</Link></li>
                    <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-bold hover:underline hover:underline-offset-2 text-xl" href="/">Albums</Link></li>
                    <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-bold hover:underline hover:underline-offset-2 text-xl" href="/">Artists</Link></li>
                    <li><Link className="transition-all ease-in hover:text-indigo-600 hover:font-bold hover:underline hover:underline-offset-2 text-xl" href="/">Music</Link></li>
                </ul>
            </nav>
        </div>
        <div className="hidden md:flex gap-3 items-center">
            <Link className="transition-all ease-in hover:text-indigo-600 hover:font-bold hover:underline hover:underline-offset-2 text-xl" href="/">LonelyBush</Link>
            <Button type="button">Logout</Button>
        </div>
        <div className="lg:hidden md:hidden flex gap-3 items-center">
            <Button type="button" onClick={() => setShowMenu(!isShowMenu)}>Menu</Button>
        </div>
    </header>
        <div className={`${isShowMenu ? 'mt-17' : '-mt-40'} lg:hidden md:hidden absolute z-0 inset-y-0 left-0 w-full transition-mt ease-in-out duration-150`}>
                <MobNavMenu links={navLinks} />
        </div>
        </>
}