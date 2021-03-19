import React from 'react';
import Head from 'next/head';
import Header from 'src/fragments/Header';
import Footer from 'src/fragments/Footer';
import works from 'src/dummy/works';

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
          <section className="container mx-auto article mb-20 p-2">
            <div className="mt-3 "></div>
            <h1 className="relative text-5xl text-center w-3/4 mx-auto font-semibold text-custom-sun mb-10">
              {`Our Works`}
            </h1>
            <div className="works gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
              {works?.length > 0 &&
                works?.map((row, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="bg-white overflow-auto shadow-md"
                      >
                        <div className="w-full bg-gray-900">
                          <img
                            className="object-cover"
                            src={row.work_image}
                            alt={row.work_name}
                          />
                        </div>
                        <div className="overflow-auto">
                          <h3 className="bg-blue-100 p-1 text-center">
                            <span className="text-md text-gray-500">
                              {row.work_name}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </>
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
