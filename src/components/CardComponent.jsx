import React from "react";
import { products } from "../constants";
import styles from "../style";

export default function CardComponent() {
  return (
    <>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 mt-10 relative z-[1]">
        <h1 className={styles.heading2}>
          Our Products
          <br className="sm:block hidden" />
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Get a sneak peak of our products and services and order it
          </p>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 mt-10 font-inter">
        {products.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.img}
              alt="image"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-primary-darker">
                  {items.title}
                </h4>
                <h6 className="text-sm"> Ksh {items.price}</h6>
              </div>
              <p className="my-4 leading-normal font-poppins text-sm">{items.content}</p>
              <button className="px-4 py-2 text-sm font-poppins text-white bg-primary-darker rounded shadow">
                View More ..
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
