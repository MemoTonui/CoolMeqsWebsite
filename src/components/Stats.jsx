import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} text-center flex-row flex-wrap py-4 scroll-mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-col m-3"
        >
          <h4 className="font-serif font-semibold xs:text-[40px] text-[30px] xs:leading-[46px] leading-[33px] text-slate-900">
            {stat.value}
          </h4>
          <p className="font-serif xs:text-[20px] p-3 text-[30px] xs:leading-[46px] leading-[40px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
