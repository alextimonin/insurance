import React from 'react';

const ProductPage = ({ title, description, features, image }) => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-xl mb-6">{description}</p>
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;