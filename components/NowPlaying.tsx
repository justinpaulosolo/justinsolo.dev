import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { NowPlayingSong } from "../lib/types";
import { FaSpotify } from "react-icons/fa/";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);
  return (
    <div>
      <div className="inline-flex items-center flex-col sm:flex-row w-full max-w-full truncate">
        <FaSpotify /> &nbsp;
        {data?.songUrl ? (
          <a
            className="capsize text-gray-800 font-medium  max-w-max truncate"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="capsize text-gray-800font-medium">Not Playing</p>
        )}
        <span className="capsize mx-2 text-gray-500 hidden sm:block">
          {" – "}
        </span>
        <p className="capsize text-gray-500 max-w-max truncate">
          {data?.artist ?? "Spotify"}
        </p>
      </div>
    </div>
  );
}
