import FeaturedProductsCard from '@/components/Cards/FeaturedProductsCard';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const ProcessorHomePage = ({ allProcessors }) => {
  return (
    <div>
      <h1>I am processor Home page</h1>
      <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-1 gap-5 mt-5">
        {allProcessors?.map((product) => (
          <FeaturedProductsCard
            key={product._id}
            product={product}
          ></FeaturedProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProcessorHomePage;


ProcessorHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getServerSideProps = async () => {

  const res = await fetch(
    `http://localhost:5000/products/processors`
  );
  const data = await res.json();

  return {
    props: {
      allProcessors: data.data,
    },
    // revalidate: 10,
  };
};