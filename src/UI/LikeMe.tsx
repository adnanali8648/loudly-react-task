import React from 'react';
import { AiFillLike } from 'react-icons/ai';


export const LikeMe: React.FC = () => {

 
  return (
    <div className="flex items-center gap-2  hover:text-red-500 cursor-pointer" >
      <AiFillLike />
      <p>
         <span>(45)</span>
      </p>
    </div>
  );
};
