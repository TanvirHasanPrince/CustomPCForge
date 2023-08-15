import DetailsProductCard from '@/components/Cards/DetailsProductCard';
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const SingleMonitorPage = ({ singleMonitor }) => {
  return (
    <div>
      <DetailsProductCard product={singleMonitor}></DetailsProductCard>
    </div>
  );
};

export default SingleMonitorPage;

SingleMonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/monitor/${params.monitorId}`
  );
  const data = await res.json();

  return {
    props: {
      singleMonitor: data.data,
    },
  };
};