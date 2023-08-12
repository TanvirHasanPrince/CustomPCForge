import React from 'react';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

const RootLayout = ({children}) => {
 return (
   <div className="w-[1440px] m-auto">
   <Navbar></Navbar>
   {children}
   <Footer></Footer>
   </div>
 );
};

export default RootLayout;