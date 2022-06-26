import React from 'react';
import { Card } from '.';

export const PlaceHolder: React.FC = () => {
  return (
    <Card>
      <div className="animate-pulse flex md:flex-row flex-col space-x-4">
        <div className=" bg-slate-200 h-56 md:w-60 ml-2 mt-2"></div>
        <div className="flex-1 space-y-2 p-4">
          <div className="h-4 w-52 bg-slate-200 rounded"></div>
          <div className="h-8 w-72 bg-slate-200 rounded"></div>
          <div className="space-y-3 pt-6">
            <div className="h-12 bg-slate-200 rounded-full"></div>
            <div className="h-10 w-60 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};
