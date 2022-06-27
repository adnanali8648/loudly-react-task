import React from "react";
import { motion } from "framer-motion";
import { Song } from "../../types";
import { Card, LikeMe, MediaPlayer } from "../../UI";

interface Props {
  song: Song;
  delay: number;
}
const SongCard: React.FC<Props> = ({ song, delay }) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay * 0.3, duration: 1 }}
    >
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
            <LikeMe songId={song.id} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
export default SongCard;
