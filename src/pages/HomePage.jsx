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
import { Helmet } from "react-helmet";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2300 });
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Coolmeqs - Heating, Ventilation & Air Conditioning (HVAC) Services
        </title>
        <link rel="canonical" href="https://coolmeqsltd.co.ke/" />
        <meta
          name="description"
          content="Experience Coolmeqs, your premier HVAC (Heating, Ventilation, and Air Conditioning) service provider in Kenya. We specialize in HVAC installations, maintenance, and repairs for residential, commercial, and industrial clients. Trust us for top-quality HVAC solutions and competitive pricing."
        />
        <script type="application/ld+json">
  
{JSON.stringify({
  "@context": "http://schema.org",
  "@type": "HVAC Business",
  "name": "Coolmeqs Services and Supplies Limited",
  "description": "Coolmeqs Ltd offers comprehensive HVAC (Heating, Ventilation, and Air Conditioning) services in Kenya, providing expert solutions for heating and cooling needs.",
  "url": "https://www.coolmeqsltd.co.ke/",
  "logo": "https://www.coolmeqsltd.co.ke/assets/coolmeqs.svg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "postalCode": "00100",
    "addressCountry": "Kenya"
  },
  "telephone": "+254708862487",
  "openingHours": "Mo-Fr 08:00-17:00",
 
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Nairobi County, Kenya"
  }})
}
   
        </script>
      </Helmet>
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

          <div data-Aos="fade-up">
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
