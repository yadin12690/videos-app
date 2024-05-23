export interface Videos {
    genres: Genre[];
    videos: Video[];
}


export type Genre = {
    id: number;
    name: string;
}

export type Video = {
    id: number;
    artist: string;
    title: string;
    release_year: number;
    genre_id: number;
    image_url: string;
}