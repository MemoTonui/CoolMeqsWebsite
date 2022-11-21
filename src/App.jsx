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
} from "./components";
import Services from "./components/Services";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-discount-gradient w-full overflow-hidden">
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
      <div
        className={`bg-discount-gradient m-2 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats /> <AboutUs /> <Business /> <Services /> <CardDeal />
          <Testimonials />
          <Clients /> <CTA /> <ContactForm /> <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
