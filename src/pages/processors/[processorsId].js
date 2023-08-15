import DetailsProductCard from "@/components/Cards/DetailsProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const SingleProcessorsPage = ({ singleProcessor }) => {


  return (
    <div>

      <DetailsProductCard product={singleProcessor}></DetailsProductCard>
    </div>
  );
};

export default SingleProcessorsPage;

SingleProcessorsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  console.log(context);
  const { params } = context;
  console.log(params);
  const res = await fetch(`http://localhost:5000/processors/${params.processorsId}`);
  const data = await res.json();

  return {
    props: {
      singleProcessor: data.data,
    },
  };
};
