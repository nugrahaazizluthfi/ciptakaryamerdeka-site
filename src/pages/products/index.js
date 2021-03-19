import React from 'react';
import Head from 'next/head';
import Header from 'src/fragments/Header';
import Footer from 'src/fragments/Footer';
import products from 'src/dummy/products';
import profile from 'src/dummy/profile';
import ImageWa from 'public/images/whatsapp.svg';
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
          <section className="container mx-auto article mb-20 p-2">
            <div className="mt-3 "></div>
            <h1 className="relative text-5xl text-center w-3/4 mx-auto font-semibold text-custom-sun mb-10">
              {`Our Products`}
            </h1>
            <div className="products gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
              {products?.length > 0 &&
                products?.map((row, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="bg-white overflow-auto shadow-md"
                      >
                        <div className="w-full bg-gray-900">
                          <img
                            className="object-cover"
                            src={row.product_image}
                            alt={row.product_name}
                          />
                        </div>
                        <div className="overflow-auto">
                          <h3 className="text-2x bg-blue-100 p-1">
                            <span className="text-lg text-gray-500">
                              {row.product_name}
                            </span>
                          </h3>
                          <div className="p-2 overflow-auto">
                            <span className="text-md float-left block p-2">
                              <div className="text-xs">Harga:</div>
                              <div className="text-lg font-semibold">
                                {row.product_price}
                              </div>
                            </span>
                            <Link
                              href={`https://api.whatsapp.com/send?phone=${
                                profile.company_phone ?? '#'
                              }&text=Halo,%20%Selamat20siang%20pak...`}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <a className="text-md text-center float-right bg-green-500 block p-2 rounded-md text-white font-semibold mr-2 cursor-pointer">
                                <ImageWa className="w-6 rounded-md" />
                              </a>
                            </Link>
                          </div>
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
