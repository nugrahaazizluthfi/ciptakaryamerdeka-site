import React from 'react';
import Card from './Card';

export default function NewsAndBlog() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 mb-10">
          <h4 className="text-center text-2xl font-extrabold mt-2 text-custom-header">
            # OUR NEWS
          </h4>
          <h1 className="text-center text-5xl font-semibold mt-2 text-custom-sun">
            Featured <br />
            News And Insights
          </h1>
        </div>

        <div className="flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="mb-24"></div>
      </div>
    </>
  );
}
