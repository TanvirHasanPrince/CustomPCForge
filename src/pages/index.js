import FeaturedProductsCard from '@/components/Cards/FeaturedProductsCard';
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import Categories from '@/components/UI/Categories';
import FeaturedProducts from '@/components/UI/FeaturedProducts';
import Head from 'next/head';
import React from 'react';

const HomePage = ({ randomProducts }) => {
  return (
    <div>
      <Head>
        <title>CustomPCForge - Home</title>
      </Head>
      <Banner></Banner>
      <FeaturedProducts randomProducts={randomProducts}></FeaturedProducts>
      <Categories></Categories>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    console.log("Fetched data:", data); // Log fetched data to check its structure

    // Get the first 10 products
    const allProducts = data.data

    // Shuffle the random products array to get a random order
    const shuffledRandomProducts = allProducts.sort(() => Math.random() - 0.5);



    return {
      props: {
        randomProducts: shuffledRandomProducts.slice(0,10),
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        randomProducts: [], // Provide an empty array in case of fetch error
      },
    };
  }
};

