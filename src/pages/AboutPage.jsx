import React from "react";
import { ContactForm, CTA, Footer, Navbar, Stats } from "../components";
import AboutUsSection from "../components/AboutUsSection";
import Information from "../components/Information";
import ServicesSection from "../components/ServicesSection";
import { Team } from "../components/Team";
import styles from "../style";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Coolmeqs HVAC Services</title>

        <link rel="canonical" href="https://coolmeqsltd.co.ke/about" />
        <meta
          name="description"
          content="Learn about Coolmeqs HVAC Services, your trusted provider of heating, ventilation, and air conditioning solutions in Your City. Discover our commitment to excellence and customer satisfaction."
        />
      </Helmet>
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
