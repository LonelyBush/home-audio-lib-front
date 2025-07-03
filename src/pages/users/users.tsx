import { UserCard } from "@/entities/user/user";
import { User } from "@/core/types/types";


export const Users = () => {
    return <div className="flex flex-col flex-wrap flex-shrink gap-4 p-4 max-w-1440">
        <h3 className="text-2xl">Users</h3>
        <div className="flex flex-wrap gap-4">
             {users.map(({login, favorites, id}, index) => {
            return <UserCard key={`${login}_${index}`} id={id} login={login} favorites={favorites}/>
        })}
        </div>
    </div>
}



export const users: User[] = [
  {
    id: "e4f3a8d0",
    login: "music_lover_42",
    favorites: {
      artists: [
        {
          id: "a1",
          name: "David Bowie",
          grammy: true
        },
        {
          id: "a2",
          name: "Queen",
          grammy: true
        }
      ],
      albums: [
        {
          id: "ab1",
          name: "The Dark Side of the Moon",
          year: 1973,
          artistId: "a3"
        }
      ],
      tracks: [
        {
          id: "t1",
          name: "Starman",
          duration: 256,
          albumId: "ab1",
          artistId: "a1"
        },
        {
          id: "t3",
          name: "Another Brick in the Wall",
          duration: 238,
          albumId: "ab2",
          artistId: "a4"
        }
      ]
    }
  },
  {
    id: "b9c7e2f1",
    login: "jazz_fan_99",
    favorites: {
      artists: [
        {
          id: "a5",
          name: "Miles Davis",
          grammy: true
        }
      ],
      albums: [
        {
          id: "ab3",
          name: "Kind of Blue",
          year: 1959,
          artistId: "a5"
        },
        {
          id: "ab4",
          name: "Time Out",
          year: 1959,
          artistId: "a6"
        }
      ],
      tracks: [
        {
          id: "t4",
          name: "So What",
          duration: 328,
          albumId: "ab3",
          artistId: "a5"
        }
      ]
    }
  },
  {
    id: "c8d5a0b3",
    login: "indie_explorer",
    favorites: {
      artists: [],
      albums: [
        {
          id: "ab5",
          name: "For Emma, Forever Ago",
          year: 2007,
          artistId: "a7"
        }
      ],
      tracks: [
        {
          id: "t5",
          name: "Skinny Love",
          duration: 238,
          albumId: "ab5",
          artistId: "a7"
        },
        {
          id: "t6",
          name: "Holocene",
          duration: 338,
          albumId: "ab5",
          artistId: "a7"
        }
      ]
    }
  }
];