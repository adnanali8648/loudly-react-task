import React, { useEffect } from "react";
import { PlaceHolder, ErrorCard } from "../UI";
import useHttp from "../hooks/http";
import { Song } from "../types";
import { RequestMethod } from "../types";
import SongCard from "./songCard";

const SongsList: React.FC = () => {
  const { isLoading, data, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest("/song/trending", RequestMethod.GET);
  }, [sendRequest]);

  return (
    <>
      <h1 className="font-bold text-5xl text-center text-white py-4">
        Songs list
      </h1>
      {isLoading ? (
        <PlaceHolder />
      ) : !error ? (
        data?.map((song: Song, index: number) => (
          <SongCard key={index} song={song} delay={index + 1} />
        ))
      ) : (
        <ErrorCard heading="Error" message={error} />
      )}
    </>
  );
};
export default SongsList;
