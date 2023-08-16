import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';
import cpuImg from "../../assets/categories_icon/cpu.png";
import motherBoardImg from "../../assets/categories_icon/motherboard.png";
import ramImg from "../../assets/categories_icon/ram-memory.png";
import psuImg from "../../assets/categories_icon/power-supply.png";
import storageImg from "../../assets/categories_icon/hdd.png";
import monitorImg from "../../assets/categories_icon/monitor.png";
import keyboardImg from "../../assets/categories_icon/keyboard.png";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const PcBuilderHomePage = () => {
  // Get the selected components from the Redux store
  const selectedComponents = useSelector(state => state.build.products);


  console.log(selectedComponents);


  const productCategories = [
    {
      id: 1,
      image: cpuImg,
      title: "CPU/processor",
      link: "/pcBuilder/builderProcessors",
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
      link: "/ram",
    },
    {
      id: 4,
      image: psuImg,
      title: "Power Supply Unit",
      link: "/psu",
    },
    {
      id: 5,
      image: storageImg,
      title: "Storage Device",
      link: "/hdd",
    },
    {
      id: 6,
      image: monitorImg,
      title: "Monitor",
      link: "/monitor",
    },
    {
      id: 7,
      image: keyboardImg,
      title: "Others",
      link: "/others",
    },
  ];

 return (
   <div>
     <div className="flex items-center justify-center py-10 my-5">
       <table class="table-auto border-collpase ">
         <thead>
           <tr className="border">
             <th className="border">Category</th>
             <th className="border">Selected Component</th>
           </tr>
         </thead>
         <tbody className="text-center">
           {productCategories.map((category, i) => (
             <tr key={i}>
               <td className="border p-5">{category.title}</td>
               <td className="border p-5">
                 {selectedComponents.map((component, i) => (
                   <Image width={200} height={200} src={component.image} key={i} alt='d'>
                     
                   </Image>
                 ))}
                 <Link className="btn btn-accent" href={category.link}>
                   Select
                 </Link>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 );
};

export default PcBuilderHomePage;


PcBuilderHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};