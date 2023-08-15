import React from 'react';
import cpuImg from '../../assets/categories_icon/cpu.png'
import motherBoardImg from '../../assets/categories_icon/motherboard.png'
import ramImg from '../../assets/categories_icon/ram-memory.png'
import psuImg from '../../assets/categories_icon/power-supply.png'
import storageImg from '../../assets/categories_icon/hdd.png'
import monitorImg from '../../assets/categories_icon/monitor.png'
import keyboardImg from '../../assets/categories_icon/keyboard.png'
import CategoriesCard from './CategoriesCard';

const Categories = () => {
 const productCategories = [
   {
     id: 1,
     image: cpuImg,
     title: "CPU/processor",
     link: "/processors",
   },
   {
     id: 2,
     image: motherBoardImg,
     title: "Motherboard",
     link: "/motherboards",
   },
   {
     id: 3,
     image: ramImg,
     title: "RAM",
     link: "/processors",
   },
   {
     id: 4,
     image: psuImg,
     title: "Power Supply Unit",
     link: "/processors",
   },
   {
     id: 5,
     image: storageImg,
     title: "Storage Device",
     link: "/processors",
   },
   {
     id: 6,
     image: monitorImg,
     title: "Monitor",
     link: "/processors",
   },
   {
     id: 7,
     image: keyboardImg,
     title: "Others",
     link: "/processors",
   },
 ];
 return (
   <div className="mt-5">
     <h1 className="text-center font-courier text-2xl text-accent">
       Featured Category
     </h1>
     <p className="text-center font-courier">
       Get Your Desired Product from Featured Category!
     </p>
     <div className='flex space-x-10'>
       {productCategories.map((category) => (
         <CategoriesCard key={category.id} category={category}></CategoriesCard>
       ))}
     </div>
   </div>
 );
};

export default Categories;