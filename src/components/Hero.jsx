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

const Hero = () => {
  return (
    <section id="home" className="heroBg">
      <div className={`flex md:flex-row flex-col   ${styles.paddingY}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col md:items-stretch items-center  xl:px-0 sm:px-16  px-6`}
        >
          <div className="flex flex-row  ">
            <div className="bg-slate-100 flex py-[3px] px-3   rounded-[30px]">
              <img
                src={discount}
                alt="discount"
                className="w-[30px] h-[30px]"
              />
              <p
                className={`${styles.paragraph} ml-2 text-sm sm:text-left text-center text-secondary`}
              >
                <span className="text-slate-900 ">Your</span> Doorstep{" "}
                <span className="text-slate-900 ">Service</span> Partner
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5  w-full">
            <h1 className="flex-1 font-serif font-semibold ss:text-[64px] text-[30px] md:text-left text-center text-slate-900 ss:leading-[80.8px] leading-[55px]">
              <span className="text-secondary">COOLMEQS SERVICES</span>{" "}
            </h1>
          </div>
          <h1 className="font-serif font-semibold ss:text-[64px] text-[30px] md:text-left text-center text-primary-darker ss:leading-[80.8px] leading-[55px] w-full">
            AND SUPPLIES LIMITED.
          </h1>
          <p
            className={`${styles.paragraph} text-slate-600 max-w-[470px] md:text-left text-center`}
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
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-2 relative`}
        >
          <div id="gallery" class="relative w-full" data-carousel="slide">
            <div class="relative h-72 overflow-hidden rounded-lg md:h-96">
              <div
                class="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src={image1}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={image2}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={image3}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={image4}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={image5}
                  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt=""
                />
              </div>
            </div>
            <button
              type="button"
              class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
