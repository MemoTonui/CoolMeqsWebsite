import React from "react";
import {
  AboutUs,
  Billing,
  Business,
  CardDeal,
  Clients,
  ContactForm,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "../components";
import CardComponent from "../components/CardComponent";
import Services from "../components/Services";
import styles from "../style";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` m-2 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <AboutUs /> <CardDeal />
          <CardComponent />
          <Testimonials />
          <Clients /> <CTA /> <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
