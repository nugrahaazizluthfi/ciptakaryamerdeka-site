import React from 'react';
import Card from './Card';
import Link from 'next/link';
import news from 'src/dummy/news';

export default function NewsAndBlog({ data }) {
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

        <div className="flex flex-wrap justify-center">
          {data?.length > 0
            ? data?.map((item, index) => {
                return (
                  <Link key={index} href={`/news/${item.slug}`}>
                    <a
                      key={index}
                      className="responsive-news responsive-padding"
                    >
                      <Card {...item} />
                    </a>
                  </Link>
                );
              })
            : news?.map((item, index) => {
                return (
                  <Link key={index} href={`/news/${item.slug}`}>
                    <a
                      key={index}
                      className="responsive-news responsive-padding"
                    >
                      <Card {...item} />
                    </a>
                  </Link>
                );
              })}
        </div>

        <div className="mb-24"></div>
      </div>
    </>
  );
}
