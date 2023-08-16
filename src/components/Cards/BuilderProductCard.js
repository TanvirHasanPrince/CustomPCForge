import { addToBuilder } from "@/redux/builder/buildPc";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";




const BuilderProductCard = ({ product }) => {
  const { image, productName, category, status, individualRating, price } = product;

  const dispatch = useDispatch();
  const router = useRouter();


    const handleAddToBuilder = () => {
      dispatch(addToBuilder(product)); // Dispatch the action with the selected product
       router.push("/pcBuilder");
    };

  return (
    <div className="border hover:border-accent p-4 rounded-md transform hover:scale-105 transition duration-300 relative">
      <div className="flex flex-col h-full">
        <div className="relative flex-grow">
          <Image
            src={image}
            alt=""
            width={240}
            height={240}
            layout="responsive"
            className="rounded-lg transform hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-5 text-center space-y-1">
          <p>Product Name: {productName}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p> {/* Replace with actual product price */}
          <p>Status: {status}</p>
          <p>Rating: {individualRating}</p>
        </div>
        <button onClick={handleAddToBuilder} className="btn btn-accent mb-4">
          Add To Builder
        </button>
      </div>
    </div>
  );
};

export default BuilderProductCard;
