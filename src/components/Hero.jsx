import styles from "../style";
import {
  discount,
  hero,
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../assets";
import Button from "./Button";
import OutlinedButton from "./OutlinedButton";
import RequestQuote from "./RequestQuote";

const Hero = () => {
  return (
    <section id="home" className="heroBg">
      <div className="w-screen h-auto py-10 justify-center text-white bg-[url('/src/assets/BgImage.png')] bg-cover bg-center bg-opacity-0">
        <div
          className={`flex md:flex-row flex-col justify-center  ${styles.paddingY}`}
        >
          <div
            className={`flex-1 ${styles.flexStart}  flex-col md:items-stretch items-center  xl:px-0 sm:px-16  px-6`}
          >
            <div className="flex flex-row justify-between mt-5  w-full">
              <h1 className="flex-1 font-serif font-semibold ss:text-[64px] text-[50px] md:text-left text-center text-slate-900 ss:leading-[84.8px] leading-[60px]">
                <span className="text-white tracking-wider">
                  COOLMEQS SERVICES
                </span>{" "}
              </h1>
            </div>
            <h1 className="font-serif tracking-wider font-semibold ss:text-[64px] text-[50px] mb-5 md:text-left text-center text-primary-darker ss:leading-[84.8px] leading-[60px] w-full">
              AND SUPPLIES LIMITED.
            </h1>
            <p
              className={`${styles.paragraph} text-white max-w-[470px] md:text-left text-center`}
            >
              <br className="sm:block hidden" />
              Coolmeqs Services and Supplies Limited provides a whole Round MEP
              solutions to the built Environment.
            </p>
            <div className="pt-8 ">
              <OutlinedButton />
            </div>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} sm:px-0 sm:mt-5 px-10 md:my-0 my-2 relative`}
          >
            <RequestQuote />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
