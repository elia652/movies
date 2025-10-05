// src/components/TrailersSection.jsx
import React, { useState } from 'react';
import ReactPlayer from 'react-player'; // lean YouTube provider
import { PlayCircle } from 'lucide-react';
import { dummyTrailers } from '../assets/assets'; // must be: export const dummyTrailers = [...]
import BlurSection from './BlurSection'; // ensure this file exists and has a default export

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6 max-w-[960px] mx-auto">
        <BlurSection top="-100px" right="-100px" />
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <ReactPlayer
            url={currentTrailer.videoUrl}
            width="100%"
            height="100%"
            controls
            // Optional: show poster until clicked
            // light={currentTrailer.image}
            onReady={() => console.log('player ready')}
            onError={(e) => console.error('react-player error', e)}
          />
        </div>
      </div>

      <div className="group grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <button
            type="button"
            key={trailer.image}
            className="relative group-hover:opacity-50 hover:-translate-y-1 duration-300  h-36 md:h-40 cursor-pointer"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircle className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
