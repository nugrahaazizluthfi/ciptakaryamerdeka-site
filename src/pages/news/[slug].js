import React from 'react';
import Head from 'next/head';
import Header from 'src/fragments/Header';
import Footer from 'src/fragments/Footer';
import ReactHtmlParser from 'react-html-parser';
import news from 'src/dummy/news';

import api from 'src/constants/api';

function Slug({ article, articles, profile }) {
  return (
    <>
      <Head>
        <title>Wujudkan Rumah Impanmu dengan Cipta Karya - Offical Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="skew-bg h-32">
          <Header />
        </section>
        <section>
          <section className="container mx-auto article">
            <div className="mt-20"></div>
            <p className="text-center text-white">
              Author,{' '}
              {`${
                article[0]?.content_created
                  ? article[0]?.content_created
                  : '29 Januari 2021'
              }`}
            </p>
            <h1 className="relative text-5xl text-center w-3/4 mx-auto font-semibold text-custom-sun mb-10">
              {`${
                article[0]?.content_title ??
                'What Means Your Mortgage And 5 Ways To Improve'
              }`}
            </h1>
            <div className="block border-4 border-gray-200 h-96 w-2/4 mx-auto bg-gray-100">
              <img
                className="object-center object-cover items-center w-full h-full"
                src={`${article[0]?.content_image}`}
                alt={`${article[0]?.content_title ?? 'Zulkarnain'}`}
              />
            </div>
            <div className="mt-10 mb-10 leading-relaxed text-justify p-5">
              {article[0]?.content_description ? (
                ReactHtmlParser(article[0]?.content_description)
              ) : (
                <>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem laudantium eaque doloremque ad consectetur
                    dolorum porro rem accusamus eius delectus, praesentium
                    repellat ipsam natus amet facilis? A assumenda esse optio?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, esse necessitatibus incidunt, sit repellendus
                    eius, nobis rem recusandae natus quisquam velit hic quia
                    enim blanditiis obcaecati. Illo in optio quasi. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Doloremque
                    porro accusantium dolorem harum aliquam cum? Numquam,
                    laboriosam ipsam praesentium assumenda, odio minus fugit
                    maiores aliquid, omnis provident sequi quae porro. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    in voluptatibus, quisquam, iure ipsa fugiat vero vel magni
                    at sit optio consequatur libero! Iure sit ex hic, nesciunt
                    similique vitae! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cumque obcaecati veritatis, sit maxime
                    consectetur impedit culpa ex quia, hic atque amet
                    voluptatibus earum, incidunt tempore eum dolore odio
                    voluptate expedita.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem laudantium eaque doloremque ad consectetur
                    dolorum porro rem accusamus eius delectus, praesentium
                    repellat ipsam natus amet facilis? A assumenda esse optio?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, esse necessitatibus incidunt, sit repellendus
                    eius, nobis rem recusandae natus quisquam velit hic quia
                    enim blanditiis obcaecati. Illo in optio quasi. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Doloremque
                    porro accusantium dolorem harum aliquam cum? Numquam,
                    laboriosam ipsam praesentium assumenda, odio minus fugit
                    maiores aliquid, omnis provident sequi quae porro. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    in voluptatibus, quisquam, iure ipsa fugiat vero vel magni
                    at sit optio consequatur libero! Iure sit ex hic, nesciunt
                    similique vitae! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cumque obcaecati veritatis, sit maxime
                    consectetur impedit culpa ex quia, hic atque amet
                    voluptatibus earum, incidunt tempore eum dolore odio
                    voluptate expedita.
                  </p>
                </>
              )}
            </div>
          </section>
        </section>
        <section className="footersection">
          <Footer data={profile} quicklinks={articles} />
        </section>
      </main>
    </>
  );
}

Slug.getInitialProps = async ({ query }) => {
  try {
    // const article = await api.article({ params: { slug: query.slug } });
    const article = news.filter(function (el) {
      return el.slug === query.slug;
    });

    const articles = await api.articles();
    const profile = await api.profile();

    return { article, profile, articles };
  } catch (error) {}
};

export default Slug;
