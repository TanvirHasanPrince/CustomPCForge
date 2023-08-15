import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const SingleProcessorsPage = ({ singleProcessor }) => {
  console.log(singleProcessor);

  return (
    <div>
      <h1>{singleProcessor.price}</h1>
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
