import { Videos } from "./types/videos";

async function getData(): Promise<Videos> {

    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

    const options = { method: "GET" };

    const response = await fetch(
        `${apiEndpoint}`,
        options
    )
        .then((response) => response.json())
        .catch((err) => console.error(err));

    return response;
}

export default async function getVideos() {
    const data = await getData();
    return data;
}