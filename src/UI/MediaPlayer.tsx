import React from 'react';


export const MediaPlayer: React.FC = () => {
  return (
    <div className="pt-6 pb-3">
      <video controls data-name="media" className="w-full h-12">
        <source src="" type="" />
      </video>
    </div>
  );
};
