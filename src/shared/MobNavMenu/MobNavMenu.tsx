import Link from "next/link"

type BurgerProps = {
    links: {name: string, href: string}[],
}

export const MobNavMenu = ({links}: BurgerProps) => {
    return <div>
        <nav className="flex flex-col w-screen">
            <ul className="flex flex-col gap-y-3 p-4 bg-gradient-to-r from-sky-50 via-blue-200 bg-blue-400 w-full">
                {links.map(({name, href}, index) => {
                    return <li key={`${name}_${index}`}><Link className="transition-all ease-in hover:text-indigo-600 hover:font-semi hover:underline hover:underline-offset-2 text-xl" href={href}>{name}</Link></li>
                })}
            </ul>
        </nav>
    </div>
}