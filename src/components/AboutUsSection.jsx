import { card, group5, group6, hvac1 } from "../assets";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const AboutUsSection = () => (
  <section
    id="about"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-10`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Get to know more
        <br className="sm:block hidden" /> about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left text-slate-600 `}>
          Everything you need to control the temperature, humidity, and purity
          of the air in an enclosed space.
        </p>
      </div>
    </div>
    <div className="flex w-full h-96 justify-center relative z-[1]">
      <img src={hvac1} alt="client" className="  object-cover" />
    </div>
  </section>
);

export default AboutUsSection;
