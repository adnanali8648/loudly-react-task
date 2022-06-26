import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import useHttp from '../hooks/http';
import { RequestMethod } from '../types';

interface Props{
  songId : string;
  likes : number;
}
export const LikeMe: React.FC<Props> = ({songId ,likes}) => {
  const{data,sendRequest}=useHttp();

  const onClickHandler=()=>{
  let formBody = `${encodeURIComponent('id')}=${encodeURIComponent(songId)}`
    sendRequest("/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",RequestMethod.POST,formBody)
  }
  return (
    <div className="flex items-center gap-2  hover:text-red-500 cursor-pointer" onClick={onClickHandler}>
      <AiFillLike />
      <p>
        {data? 'liked' : 'like'} <span>({likes})</span>
      </p>
    </div>
  );
};
