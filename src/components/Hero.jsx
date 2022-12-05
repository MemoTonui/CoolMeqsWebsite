import styles from "../style";
import { discount, hero } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col heroBg  ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-secondary`}>
            <span className="text-slate-900">Your</span> Doorstep{" "}
            <span className="text-slate-900">Service</span> Partner
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-serif font-semibold ss:text-[68px] text-[48px] text-slate-900 ss:leading-[100.8px] leading-[75px]">
            <span className="text-secondary">COOLMEQS SERVICES</span>{" "}
          </h1>
        </div>
        <h1 className="font-serif font-semibold ss:text-[64px] text-[48px] text-primary-darker ss:leading-[100.8px] leading-[75px] w-full">
          AND SUPPLIES LIMITED.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <br className="sm:block hidden" />
          Coolmeqs Services and Supplies Limited provides a whole Round MEP
          solutions to the built Environment.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={hero}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
