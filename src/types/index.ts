export type Song = {
  id: string;
  name: string;
  name_seo: string;
  artist: object;
  artist_name: artist;
  duration: number;
  bpm: number;
  likes: number;
  faves: number;
  plays: number;
  reposts: number;
  comments: number;
  description: string;
  tags: [] | null;
  source_info: string;
  cover_image_path: string;
  cover_image_aspect_ratio: "700:700" | string;
  music_file_path: string;
  music_file_mimetype: "audio/mp4" | string;
  song_genres: string[];
  song_release: Date;
  mix_packs: [];
  linked_crews: [];
};

export type artist = {
  id: string;
  name: string;
  artist_name: string;
  muted: boolean;
  place: string | null;
  country: string | null;
  followers: number;
  follows: number;
  liked: number;
  releases: number;
  favorites: number;
  description: string | null;
  profile_image_path: string;
  cover_image_path: string;
  favorite_genres: [];
  created: string;
  location: string | null;
  social_accounts: [];
  video_shout_out_count: number;
  external_songs_count: number | null;
  external_videos_count: 0;
  crews: [];
};

export type Like = {
  id: number;
  date_created: Date;
  song_id: string;
  user_id: string;
};

export type InitialState = {
  loading: boolean;
  error: string | undefined | null;
  data?: Song[] | null;
};

export type HttpAction = {
  responseData?: Song[];
  type?: ActionType;
  errorMessage?: string | undefined | null;
};

export enum ActionType {
  RESPONSE = "RESPONSE",
  SEND = "SEND",
  ERROR = "ERROR",
  CLEAR = "CLEAR",
}

export type RequestBody = {
  id?: string[];
};

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}
