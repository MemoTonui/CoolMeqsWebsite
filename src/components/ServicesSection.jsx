import { services, services1, stats } from "../constants";
import styles from "../style";

const ServiceCard = ({ id, title, content, icon, index }) => (
  <div className="hover:shadow-lg p-3 rounded-md">
    <div className="flex justify-center bg-slate-50 font-poppins items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
      <img
        src={icon}
        alt="service_icon"
        className="w-[42px] h-[27px] object-contain"
      />
    </div>
    <h3 className="mb-2 text-xl text-slate-900 font-semibold font-serif dark:text-white">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-gray-400 font-poppins text-[15px]">
      {content}
    </p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <div className="w-full flex justify-between gap-10 items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>
            What Other Services Are We
            <br className="sm:block hidden" /> Offering You ?
          </h1>
         
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 my-2 md:space-y-0">
          {services.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
