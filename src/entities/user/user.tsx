'use client'

import { User } from "@/core/types/types"
import { UserIcon } from "@/shared/svgs/UserIcon"

export const UserCard = ({login, id, favorites}: User) => {
    console.log(id);
    return <div className="flex items-center h-40 gap-4 rounded-md shadow-xl p-4 cursor-pointer transition-all ease-in-out hover:ring-2 ring-blue-200">
        <div className=" flex items-center justify-center rounded-full bg-gray-300 w-13 h-13">
            <UserIcon width="30px" height="30px" />
        </div>
        <div className="flex flex-col justify-between">
            <p className="text-xl">{login}</p>
            <div className="flex flex-col gap-2">
                <p>Favorites:</p>
                <div className="flex gap-3">
                    {Object.entries(favorites).map(([key, val]) => {
                    return <p key={`${key}_${val}`} className="capitalize">{`${key}: ${val.length}`}</p>
                    })}
                </div>
            </div>
        </div>
    </div>
}