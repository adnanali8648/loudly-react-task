import React from 'react';
import SongCard from './songCard';


const SongsList: React.FC = () => {

 
  return (
    <>
      <h1 className="font-bold text-5xl text-center text-white py-4">
        Songs list
      </h1>
          <SongCard  />
    </>
  );
};
export default SongsList;
