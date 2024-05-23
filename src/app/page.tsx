'use client';

import getVideos from "@/api/getVideosData";
import { Header } from "@/components/Header";
import { LoadingWheel } from "@/components/LoadingWheel";
import { VideosMain } from "@/components/VideosMain";
import { useQuery } from "react-query";

export default function Home() {

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getVideos(),
    queryKey: ["videos"], //Array according to Documentation
  });
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full p-8 flex flex-col h-full justify-center">
        <Header />
        {isLoading ? <LoadingWheel /> : <VideosMain videos={data} />}
      </section>
    </main>
  );
}
