

export interface Artist {
    id: string;
    name: string;
    grammy: boolean;
}

export interface Albums {
    id: string;
    name: string;
    year: number;
    artistId: string;
}

export interface Track {
    id: string;
    name: string;
    duration: number;
    albumId: string;
    artistId: string;
}

export interface Favorites {
    artists: Artist[];
    albums: Albums[];
    tracks: Track[];
}


export interface User {
    id: string;
    login: string;
    favorites: Favorites;
}