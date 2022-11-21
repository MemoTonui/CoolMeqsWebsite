import { card, group, group4 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const AboutUs = () => (
  <section id="about_us" className={layout.section}>
    <div className={layout.sectionImg}>
      <img src={group4} alt="" className="w-[100%] h-[100%]" />
    </div>
    <div className={`${layout.sectionInfo} mx-10`}>
      <h2 className={styles.heading2}>
        About <br className="sm:block hidden" />
        Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>

      <Button styles="mt-10" />
    </div>
  </section>
);

export default AboutUs;
