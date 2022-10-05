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
    thumbnailurl: string;
    tags: string[];
  };
  slug: string;
}

export interface Project {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    technology: string[];
  };
  slug: string;
}