import React from 'react';
import { Song } from '../../types';
import { MediaPlayer, Card } from '../../UI';

interface Props {
  song: Song;
}
const SongCard: React.FC<Props> = ({ song }) => {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-center  w-full h-full">
        <div className="w-full sm:w-1/4  bg-black">
          <img className="w-full h-full" src={song.cover_image_path} alt="" />
        </div>
        <div className=" h-full w-full sm:w-3/4 flex flex-col p-5">
          <h2 className="font-bold text-3xl">{song.name}</h2>
          <span className="font-normal text-sm text-slate-400">
            {`by ${song?.artist_name}`}
          </span>
          <MediaPlayer
            path={song.music_file_path}
            type={song.music_file_mimetype}
          />
        </div>
      </div>
    </Card>
  );
};
export default SongCard;
