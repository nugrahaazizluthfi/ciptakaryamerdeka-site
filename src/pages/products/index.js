import React from 'react';
import Head from 'next/head';
import Header from 'src/fragments/Header';
import Footer from 'src/fragments/Footer';
import products from 'src/dummy/products';
import profile from 'src/dummy/profile';
import ImageWa from 'public/images/whatsapp.svg';
import ImageIg from 'public/images/instagram.svg';
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
            <div className="mt-20"></div>
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
                        className="bg-white overflow-auto shadow-md rounded-md"
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
                          <div className="overflow-auto text-center">
                            <Link
                              href={`https://api.whatsapp.com/send?phone=${
                                profile.company_phone ?? '#'
                              }&text=Selamat%20siang%2C%20saya%20tertarik%20untuk%20berkonsultasi`}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <a className="text-sm text-center block float-right font-semibold p-2 cursor-pointer">
                                <ImageWa className="h-8 rounded-md relative mx-auto" />{' '}
                              </a>
                            </Link>
                            <Link
                              href={`${profile.company_ig ?? '#'}`}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <a className="text-sm text-center block float-right font-semibold p-2 cursor-pointer">
                                <ImageIg className="h-8 rounded-md relative mx-auto" />{' '}
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
