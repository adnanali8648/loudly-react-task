import React, { useEffect } from 'react';
import useHttp from '../hooks/http';
import { RequestMethod } from '../types';
import SongCard from './songCard';

const SongsList: React.FC = () => {
  const { isLoading, data, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest('/song/trending', RequestMethod.GET);
  }, [sendRequest]);

  return (
    <>
      <h1 className="font-bold text-5xl text-center text-white py-4">
        Songs list
      </h1>
      {!isLoading && data && data.map((song: object, index: number) => (
          <SongCard key={index} song={song} />
        ))}
    </>
  );
};
export default SongsList;
