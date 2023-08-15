import DetailsProductCard from '@/components/Cards/DetailsProductCard';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const SinglePsuPage = ({ singlePsu }) => {
  return (
    <div>
      <DetailsProductCard product={singlePsu}></DetailsProductCard>
    </div>
  );
};

export default SinglePsuPage;

SinglePsuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:5000/psu/${params.psuId}`
  );
  const data = await res.json();

  return {
    props: {
      singlePsu: data.data,
    },
  };
};
