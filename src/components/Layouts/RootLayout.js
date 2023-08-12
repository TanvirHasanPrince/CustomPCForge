import React from 'react';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

const RootLayout = ({children}) => {
 return (
   <div className="">
   <Navbar></Navbar>
   {children}
   <Footer></Footer>
   </div>
 );
};

export default RootLayout;