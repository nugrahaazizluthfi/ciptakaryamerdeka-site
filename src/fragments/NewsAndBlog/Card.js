import React from 'react';
import moment from 'moment';

export default function Card({
  content_title,
  content_short,
  content_image,
  content_created,
}) {
  return (
    <>
      <div
        className="bg-white m-2 p-2 shadow-md border border-gray-200 cursor-pointer"
        style={{ minHeight: 450, overflow: 'hidden' }}
      >
        <div className="bg-gray-300 h-40 overflow-hidden">
          <img
            className="object-center object-cover items-center w-full h-full"
            src={content_image}
            alt={`${content_title ?? 'Zulkarnain'}`}
          />
        </div>
        <div className="mt-4">
          <p className="text-xs">
            Author,{' '}
            {`${
              content_created
                ? moment(content_created).format('DD MMMM YYYY')
                : '29 Januari 2021'
            }`}
          </p>
        </div>
        <h1
          className="text-2xl font-semibold text-custom-header mb-4 mt-2"
          style={{ maxHeight: 90, overflow: 'hidden' }}
        >
          {`${
            content_title ?? 'What Means Your Mortgage And 5 Ways To Improve'
          }`}
        </h1>
        <p className="text-sm" style={{ maxHeight: 120, overflow: 'hidden' }}>
          {content_short ? (
            content_short
          ) : (
            <>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              modi veritatis eos eum atque corporis blanditiis sed non nobis
              aperiam?
            </>
          )}
        </p>
      </div>
    </>
  );
}
