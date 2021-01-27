import React from 'react';

export default function Card() {
  return (
    <>
      <div className="bg-white m-2 p-2 shadow-md border border-gray-200 w-1/4 cursor-pointer">
        <div className="bg-gray-300 h-40"></div>
        <div className="mt-4">
          <p className="text-xs">Budi handuk, Author | 29 Januari 2021</p>
        </div>
        <h1 className="text-2xl font-semibold text-custom-header mb-2 mt-2">
          What Means Your Mortgage And 5 Ways To Improve
        </h1>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe modi
          veritatis eos eum atque corporis blanditiis sed non nobis aperiam?
        </p>
      </div>
    </>
  );
}
