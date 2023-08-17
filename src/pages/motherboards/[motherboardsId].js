import DetailsProductCard from "@/components/Cards/DetailsProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const SingleMotherBoardPage = ({ singleMotherboard }) => {
  return (
    <div>
      <DetailsProductCard product={singleMotherboard}></DetailsProductCard>
    </div>
  );
};

export default SingleMotherBoardPage;

SingleMotherBoardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://custom-pc-forge-server.vercel.app/motherboards/${params.motherboardsId}`
  );
  const data = await res.json();

  return {
    props: {
      singleMotherboard: data.data,
    },
  };
};
