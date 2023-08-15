import FeaturedProductsCard from '@/components/Cards/FeaturedProductsCard';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const RamHomePage = ({ allRam }) => {
  return (
    <div>
      <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-1 gap-5 mt-5">
        {allRam?.map((product) => (
          <FeaturedProductsCard
            key={product._id}
            product={product}
          ></FeaturedProductsCard>
        ))}
      </div>
    </div>
  );
};

export default RamHomePage;

RamHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:5000/products/ram`);
  const data = await res.json();

  return {
    props: {
      allRam: data.data,
    },
    // revalidate: 10,
  };
};