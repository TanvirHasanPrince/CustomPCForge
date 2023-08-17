import DetailsProductCard from "@/components/Cards/DetailsProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const SingleOthersPage = ({ singleOtherProduct }) => {
  return (
    <div>
      <DetailsProductCard product={singleOtherProduct}></DetailsProductCard>
    </div>
  );
};

export default SingleOthersPage;

SingleOthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://custom-pc-forge-server.vercel.app/others/${params.othersId}`
  );
  const data = await res.json();

  return {
    props: {
      singleOtherProduct: data.data,
    },
  };
};
