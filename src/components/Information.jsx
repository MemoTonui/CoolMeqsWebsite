import { card, group, group5 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Services from "./Services";
import Stats from "./Stats";

const Information = () => (
  <section
    id="about"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-2`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        OUR
        <br className="sm:block hidden" /> STORY
      </h1>

      <div className="w-full md:mt-0 mt-2">
        <p className={`${styles.paragraph} text-left `}>
          <div className="flex flex-col sm:flex-row">
            <p
              className={`text-left font-poppins leading-loose flex-1  px-1 mt-12 flex-wrap text-slate-600 ${styles.paragraph}`}
            >
              Coolmeqs Services and Supplies Ltd,is one of the most sought after
              Air Treatment company in Kenya, It started its journey as an Hvac
              service provider to small and medium Enterprises in Bomet County
              and soon after diversified its activities with the supply and
              distribution of various Mechanical and Electrical goods.Throughout
              2021 and beginning of 2022, Coolmeqs Services and supplies Limited
              with further diversification actively participated in the
              servicing of HVAC installations in private and public institutions
              majorly in Nairobi and a few of them outside the capital city.
              Currently, Coolmeqs Services and supplies Limited prides itself on
              being a one-stop-shop that can meet all the needs of our
              residential, commercial and industrial clients. We specialize in
              the service, scheduled maintenance, and installation of air
              conditioning, heating, plumbing, and fresh air systems. We provide
              quality workmanship and service at competitive prices. You can
              always count on our technicians to uphold the highest standards of
              efficiency, attention to detail, and strict use of only quality
              parts and equipment.
            </p>
          </div>
        </p>
      </div>
    </div>
  </section>
);

export default Information;
