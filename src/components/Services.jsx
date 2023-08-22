import { useEffect } from "react";
import { services1, services2 } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ id, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] ${
      index !== services1.length - 1 ? "mb-1" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-3">
      <div className="p-8 bg-primary-darker rounded mb-4 pulsating-card relative mx-4 flex flex-row tracking-tighter cursor-pointer items-center  text-slate-800">
        <p className="highlighted-text flex absolute pl-12  left-0">{id}</p>
        <p className="font-semibold text-xl font-poppins text-left flex-1 text-white">
          {title}
        </p>
        <p className="mt-4 text-sm font-inter flex-1 about-us-card tracking-wide text-white">
          {content}{" "}
        </p>
      </div>
    </div>
  </div>
);
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <div>
      <section id="features" className={layout.section}>
        <div className={`${layout.sectionImg} flex-col`}>
          {services1.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={index}
              data-Aos="fade-right"
            />
          ))}
        </div>
      </section>
     
    </div>
  );
};

export default Services;
