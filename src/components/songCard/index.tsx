import React from 'react';
import { Card, LikeMe, MediaPlayer } from '../../UI';


const SongCard: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-center  w-full h-full">
        <div className="w-full sm:w-1/4  bg-black">
          <img className="w-full h-full" src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg" alt="" />
        </div>
        <div className=" h-full w-full sm:w-3/4 flex flex-col p-5">
          <h2 className="font-bold text-3xl">testname</h2>
          <span className="font-normal text-sm text-slate-400">
            by test singer
          </span>
          <MediaPlayer />
          <LikeMe />
        </div>
      </div>
    </Card>
  );
};
export default SongCard;
