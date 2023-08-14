/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoriesCard = ({ category }) => {
 const {link, image, title } = category;
 console.log(image);


  return (
    <div>
      <Link
        href={link} 
      >
        <div className="flex flex-col mt-5">
          <div>
         <Image src={image} alt="" className=" rounded-xl"/>
          </div>
          <div className="p-5 text-center space-y-1 mt-1">
            <p className='font-courier'>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;