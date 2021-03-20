import React from 'react';
import Head from 'next/head';
import Header from 'src/fragments/Header';
import Footer from 'src/fragments/Footer';
import news from 'src/dummy/news';
import Card from '../../fragments/NewsAndBlog/Card';
import Link from 'next/link';

function Index() {
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
          <section className="container mx-auto article mb-20">
            <div className="mt-20"></div>
            <h1 className="relative text-5xl text-center w-3/4 mx-auto font-semibold text-custom-sun mb-10">
              {`Our News`}
            </h1>
            <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
              {news?.length > 0 &&
                news?.map((item, index) => {
                  return (
                    <Link key={index} href={`/news/${item.slug}`}>
                      <a key={index}>
                        <Card {...item} />
                      </a>
                    </Link>
                  );
                })}
            </div>
          </section>
        </section>
        <section className="footersection">
          <Footer data={[]} quicklinks={[]} />
        </section>
      </main>
    </>
  );
}

export default Index;
