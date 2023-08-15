import FeaturedProductsCard from '@/components/Cards/FeaturedProductsCard';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const MonitorHomePage = ({ allMonitor }) => {
  return (
    <div>
      <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-1 gap-5 mt-5">
        {allMonitor?.map((product) => (
          <FeaturedProductsCard
            key={product._id}
            product={product}
          ></FeaturedProductsCard>
        ))}
      </div>
    </div>
  );
};

export default MonitorHomePage;

MonitorHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:5000/products/monitor`);
  const data = await res.json();

  return {
    props: {
      allMonitor: data.data,
    },
  };
};
