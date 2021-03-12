import Officers from './Officers';
import styles from 'styles/officers.module.scss';

export default function Index({ data }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 mb-10">
          <h4 className="text-center text-2xl font-extrabold mt-2 text-white">
            # OUR TEAM
          </h4>
          <h1 className="text-center text-5xl font-semibold mt-2 text-custom-sun">
            Know More About <br /> Our Team
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {data.length > 0 ? (
            data?.map((row, index) => {
              return (
                <div key={index} className="responsive-card responsive-padding">
                  <Officers {...row} {...styles} />
                </div>
              );
            })
          ) : (
            <h1 className="text-center text-5xl text-semibold mt-10 text-white">
              No Data
            </h1>
          )}
        </div>
        <div className="mb-10"></div>
      </div>
    </>
  );
}
