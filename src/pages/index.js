import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>This is Home Page of the website</h1>
  <Banner></Banner>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};