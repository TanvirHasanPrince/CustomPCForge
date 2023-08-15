import DetailsProductCard from '@/components/Cards/DetailsProductCard';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const SingleHddPage = ({ singleHdd }) => {
  return (
    <div>
      <DetailsProductCard product={singleHdd}></DetailsProductCard>
    </div>
  );
};

export default SingleHddPage;

SingleHddPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/hdd/${params.hddId}`
  );
  const data = await res.json();

  return {
    props: {
      singleHdd: data.data,
    },
  };
};
