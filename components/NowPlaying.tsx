import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { NowPlayingSong } from "../lib/types";
import { FaSpotify } from "react-icons/fa/";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  return (
    <div>
      <div className="inline-flex w-full max-w-full flex-col items-center truncate sm:flex-row">
        <FaSpotify className="md:mr-2" />
        {data?.songUrl ? (
          <a
            className="capsize max-w-max truncate  font-medium text-neutral-600 dark:text-neutral-400"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="capsize font-medium text-neutral-600 dark:text-neutral-400">
            Not Playing
          </p>
        )}
        <span className="capsize mx-2 hidden text-neutral-600 dark:text-neutral-400 sm:block">
          {" – "}
        </span>
        <p className="capsize max-w-max truncate text-neutral-600 dark:text-neutral-400">
          {data?.artist ?? "Spotify"}
        </p>
      </div>
    </div>
  );
}
