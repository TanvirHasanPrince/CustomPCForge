import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProductsCard = ({ product }) => {
  const { _id,  image, productName, category, status, individualRating, price } =
    product;

  return (
    <Link
      href={`/${category.toLowerCase()}/${_id}`}
      className="border hover:border-accent p-4 rounded-md transform hover:scale-105 transition duration-300"
    >
      <div className="flex flex-col">
        <div>
          <Image
            src={image}
            alt=""
            width={340}
            height={340}
            layout="responsive"
            className="rounded-lg transform hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-5 text-center space-y-1 mt-1">
          <p>Product Name: {productName}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p> {/* Replace with actual product price */}
          <p>Status: {status}</p>
          <p>Rating: {individualRating}</p>
        </div>
      </div>
    </Link>
  );
};

// const FeaturedProductsList = ({ allProducts }) => {
//   return (
//     <div className="grid grid-cols-5 gap-4">
//       {allProducts.map((product, index) => (
//         <FeaturedProductsCard key={index} product={product} />
//       ))}
//     </div>
//   );
// };

export default FeaturedProductsCard;
