import DetailsProductCard from "@/components/Cards/DetailsProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const SingleRamPage = ({ singleRam }) => {
  return (
    <div>
      <DetailsProductCard product={singleRam}></DetailsProductCard>
    </div>
  );
};

export default SingleRamPage;

SingleRamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://custom-pc-forge-server.vercel.app/ram/${params.ramId}`
  );
  const data = await res.json();

  return {
    props: {
      singleRam: data.data,
    },
  };
};
