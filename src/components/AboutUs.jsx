import { card, group, group5 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Services from "./Services";

const AboutUs = () => (
  <section id="about_us" className={`${layout.section} about`}>
    <div className={`${layout.sectionInfo} mx-2`}>
      <h2 className={`${styles.heading2} container mx-auto text-center`}>
        ABOUT US
      </h2>
      <hr className="mx-auto" />
      <div className="flex flex-col sm:flex-row">
        <p
          className={`text-left font-inter leading-loose flex-1 font-light px-6 mt-12 flex-wrap text-primary-darker ${styles.paragraph}`}
        >
          Coolmeqs Services and Supplies Ltd,is one of the most sought after Air
          Treatment company in Kenya, It started its journey as an Hvac service
          provider to small and medium Enterprises in Bomet County and soon
          after diversified its activities with the supply and distribution of
          various Mechanical and Electrical goods.Throughout 2021 and beginning
          of 2022, Coolmeqs Services and supplies Limited with further
          diversification actively participated in the servicing of HVAC
          installations in private and public institutions majorly in Nairobi
          and a few of them outside the capital city. Currently, Coolmeqs
          Services and supplies Limited prides itself on being a one-stop-shop
          that can meet all the needs of our residential, commercial and
          industrial clients. We specialize in the service, scheduled
          maintenance, and installation of air conditioning, heating, plumbing,
          and fresh air systems. We provide quality workmanship and service at
          competitive prices. You can always count on our technicians to uphold
          the highest standards of efficiency, attention to detail, and strict
          use of only quality parts and equipment.
        </p>
      </div>
    </div>
    <div className="flex flex-col flex-1">
      <Services />
    </div>
  </section>
);

export default AboutUs;
