import Image from 'next/image';
import React from 'react';

const DetailsProductCard = ({ product }) => {
  const {
    _id,
    image,
    productName,
    category,
    status,
    individualRating,
    price,
    description,
    keyFeatures,
    averageRating,
  } = product;
  return (
    <div>
      <div className='flex flex-col'>
        <Image
          src={image}
          alt=""
          width={340}
          height={340}
          className="m-auto rounded-lg transform hover:scale-110 transition duration-300 my-10"
        />
      </div>
      <div>
        <table class="table-auto border-collpase ">
          <thead>
            <tr className="border">
              <th className="border">Specifications</th>
              <th className="border">Details</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="border">Product Name</td>
              <td className="border">{productName}</td>
            </tr>
            <tr>
              <td className="border">Category</td>
              <td className="border">{category}</td>
            </tr>
            <tr>
              <td className="border">Status</td>
              <td className="border">{status}</td>
            </tr>
            <tr>
              <td className="border">Price</td>
              <td className="border">{price} BDT</td>
            </tr>
            <tr>
              <td className="border">Description</td>
              <td className="border">{description}</td>
            </tr>
            <tr>
              <td className="border">Brand</td>
              <td className="border">{keyFeatures.brand}</td>
            </tr>
            <tr>
              <td className="border">Model</td>
              <td className="border">{keyFeatures.model}</td>
            </tr>
            <tr>
              <td className="border">Specification</td>
              <td className="border">{keyFeatures.specification}</td>
            </tr>
            <tr>
              <td className="border">Port</td>
              <td className="border">{keyFeatures.port}</td>
            </tr>
            <tr>
              <td className="border">Type</td>
              <td className="border">{keyFeatures.type}</td>
            </tr>
            <tr>
              <td className="border">Resolution</td>
              <td className="border">{keyFeatures.resolution}</td>
            </tr>
            <tr>
              <td className="border">Voltage</td>
              <td className="border">{keyFeatures.voltage}</td>
            </tr>
            <tr>
              <td className="border">Individual Rating </td>
              <td className="border">{individualRating}</td>
            </tr>
            <tr>
              <td className="border">Average Rating</td>
              <td className="border">{averageRating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsProductCard;