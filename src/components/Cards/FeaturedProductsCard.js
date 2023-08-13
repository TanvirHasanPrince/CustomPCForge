import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProductsCard = () => {
 return (
   <Link
     href=""
     className="border  hover:border-accent p-4 rounded-md transform hover:scale-105 transition duration-300"
   >
     <div className="p-5 flex flex-col ">
       <div className="">
         <Image
           src="https://www.cloud.ryanscomputers.com/cdn/products/medium/apple-macbook-air-late-2020-apple-m1-chip-8gb-11607861922.webp"
           alt=""
           width={800}
           height={600}
           layout="responsive"
           className="rounded-lg transform hover:scale-125 transition duration-300"
         />
       </div>
       <div className="text-center space-y-1 mt-5">
         <p>
           Product Name: Acer KA222Q H 21.5 100Hz AMD FreeSync Full HD Monitor
         </p>
         <p>Category: Monitor</p>
         <p>Price: 8,799</p>
         <p>Status: In Stock</p>
         <p>Rating: 4.5</p>
       </div>
     </div>
   </Link>
 );
};

export default FeaturedProductsCard;