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
import AboutUsSection from "../components/AboutUsSection";
import CardComponent from "../components/CardComponent";
import Information from "../components/Information";
import Services from "../components/Services";
import ServicesSection from "../components/ServicesSection";
import { Team } from "../components/Team";
import styles from "../style";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` m-2 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div>
            <AboutUsSection />
          </div>
          <div>
            <Information />
            <div className="bg-slate-100 px-4">
              <Stats />
            </div>
            <ServicesSection />
            <Team />
            <CTA />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
