import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurSection from '../components/BlurSection';

const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className="my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurSection top="150px" left="0px" />
      <BlurSection top="50px" left="50px" />
      <h1 className="text-lg font-medium my-4">Your Favorite Movies</h1>
      <div className="flex flex-wrap max-sm:justify-center  gap-8">
        {dummyShowsData.map((movie) => {
          return <MovieCard movie={movie} key={movie._id} />;
        })}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-center font-bold">No movies available</h1>
    </div>
  );
};

export default Favorite;
