import React from 'react';
import FeaturedProductsCard from '../Cards/FeaturedProductsCard';

const FeaturedProducts = () => {
 return (
   <div>
     <h1 className="text-center font-courier text-2xl text-accent">
       Featured Products
     </h1>
     <p className="text-center font-courier">
       Check & Get Your Desired Product!
     </p>
     <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-1 gap-5">
       <FeaturedProductsCard></FeaturedProductsCard>
     </div>
   </div>
 );
};

export default FeaturedProducts;