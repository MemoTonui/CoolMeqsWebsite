import React from "react";
import { allProducts, products } from "../constants";
import styles from "../style";

const ProductComponent = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-14 mt-10 relative z-[1]">
        <h1 className={`${styles.heading2} flex justify-center`}>
          Our Products
          <br className="sm:block hidden" />
        </h1>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 mt-10 font-poppins">
        {allProducts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.img}
              alt="image"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold font-poppins text-primary-darker">
                  {items.title}
                </h4>
                <h6 className="text-sm font-poppins"> Ksh {items.price}</h6>
              </div>
              <p className="my-4 leading-normal font-poppins text-sm">
                {items.content}
              </p>
              <button
                onClick={() => {
                  alert("Purchasing Product " + items.id);
                }}
                type="Submit"
                className="px-4 py-2 text-sm font-serif text-white bg-primary-darker rounded shadow hover:bg-secondary"
              >
                Buy Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductComponent;
