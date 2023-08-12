import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>CustomPCForge - Home</title>
      </Head>
      <Banner></Banner>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};