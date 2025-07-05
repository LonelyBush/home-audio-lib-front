import { createApi, } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../systems/systems'
import { Artist } from '../types/types'

export const audioLibApi = createApi({
    reducerPath: 'audioLibApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllArtist: builder.query<Artist[], void>({
            query: () => '/artist'
        })
    })
})

export const { useGetAllArtistQuery} = audioLibApi