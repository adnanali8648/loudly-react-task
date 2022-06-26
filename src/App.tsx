import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongsList from './components/songsList';

const App: React.FC = () => {
  return (
    <div className="overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 w-screen h-screen m-auto p-5 bg-cover bg-scroll bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_1280.jpg')]">
      <div className="container mx-auto max-w-4xl">
        <SongsList />
      </div>
    </div>
  );
};

export default App;
