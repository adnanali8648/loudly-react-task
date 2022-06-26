import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import useHttp from '../hooks/http';
import { RequestMethod } from '../types';

interface Props{
  songId : string;
}
export const LikeMe: React.FC<Props> = ({songId}) => {
  const{data,sendRequest}=useHttp();
  console.log(process.env.REACT_APP_API_KEY)

  const onClickHandler=()=>{
  let formBody = `${encodeURIComponent('id')}=${encodeURIComponent(songId)}`
    sendRequest(`/interact/like?apikey=${process.env.REACT_APP_API_KEY}`,RequestMethod.POST,formBody)
  }
  return (
    <div className={`flex items-center gap-2  hover:text-red-500 cursor-pointer ${data && 'text-green-500'}`} onClick={onClickHandler}>
      <AiFillLike />
      <p>
        {data? 'liked' : 'like'} 
      </p>
    </div>
  );
};
