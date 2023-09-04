import React, { useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";
import ServicesSection from "../components/ServicesSection";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2300 });
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} data-Aos="fade-top">
          <Hero />
        </div>
      </div>
      <div className={` m-2 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div data-Aos="fade-right">
            <Stats />
          </div>

          <div data-Aos="fade-down">
            <CardDeal />
          </div>

          <div data-Aos="fade-up">
            <Testimonials />
          </div>
          <div data-Aos="fade-right">
            <CTA />
          </div>

          <div data-Aos="fade-left">
            <ServicesSection />
          </div>
          <div data-Aos="fade-down">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
