import { services1, services2 } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const ServiceCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== services1.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`flex w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Services = () => {
  return (
    <div >
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} mx-14`}>
          Services
          <br className="sm:block hidden" />
        </h2>
      </div>
      <section id="features" className={layout.section}>
        <div className={`${layout.sectionImg} flex-col`}>
          {services1.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {services2.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </section>
      <div className="flex justify-between mx-10">
      <div></div>
        <div className="flex-col-reverse">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Services;
