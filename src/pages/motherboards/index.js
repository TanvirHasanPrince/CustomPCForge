import FeaturedProductsCard from "@/components/Cards/FeaturedProductsCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const MotherboardHomePage = ({ allMotherboards }) => {
  return (
    <div>
      <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-1 gap-5 mt-5">
        {allMotherboards?.map((product) => (
          <FeaturedProductsCard
            key={product._id}
            product={product}
          ></FeaturedProductsCard>
        ))}
      </div>
    </div>
  );
};

export default MotherboardHomePage;

MotherboardHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://custom-pc-forge-server.vercel.app/products/motherboards`
  );
  const data = await res.json();

  return {
    props: {
      allMotherboards: data.data,
    },
    // revalidate: 10,
  };
};
