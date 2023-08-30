import { card, group, group5 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Services from "./Services";

const AboutUs = () => (
  <section className="my-14">
    <div className={`${layout.sectionInfo} flex items-center mx-2 `}>
      <h2
        className={`${styles.heading2} text-slate-900 text-center container mx-auto px-2`}
      >
        About Us
      </h2>
      <hr className="mx-auto" />
      <div className="flex flex-col sm:flex-row">
        <p
          className={`text-left font-poppins md:px-24  flex-1  mt-5 flex-wrap text-slate-600 ${styles.paragraph}`}
        >
          Coolmeqs Services and Supplies Ltd is a highly regarded Air Treatment
          company in Kenya. It initially started by providing HVAC services to
          small and medium businesses in Bomet County. Later, it expanded its
          operations to include supplying Mechanical and Electrical goods. In
          2021 and early 2022, the company further diversified by servicing HVAC
          installations in various institutions, mainly in Nairobi. Presently,
          Coolmeqs Services and Supplies Ltd is known as a comprehensive
          solution for residential, commercial, and industrial clients. They
          specialize in air conditioning, heating, plumbing, and fresh air
          system services, maintenance, and installation, maintaining high
          standards of quality and efficiency.
        </p>
      </div>
    </div>
    <div className="">
      <Services />
    </div>
  </section>
);

export default AboutUs;
