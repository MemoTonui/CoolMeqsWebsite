import React from "react";
import { ContactForm, CTA, Footer, Navbar, Stats } from "../components";
import AboutUsSection from "../components/AboutUsSection";
import Information from "../components/Information";
import ProductComponent from "../components/Products";
import ServicesSection from "../components/ServicesSection";
import { Team } from "../components/Team";
import styles from "../style";

const Products = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` m-2 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="m-10 mb-28">
            <ProductComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
