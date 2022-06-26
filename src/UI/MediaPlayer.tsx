import React from 'react';

interface Props {
  path: string;
  type: string;
}
export const MediaPlayer: React.FC<Props> = ({ path, type }) => {
  return (
    <div className="pt-6 pb-3">
      <video controls data-name="media" className="w-full h-12">
        <source src={path} type={type} />
      </video>
    </div>
  );
};
