export type NowPlayingSong = {
  albuy: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export interface Post {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
  };
  slug: string;
}