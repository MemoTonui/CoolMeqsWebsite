import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section id="about_us" className={`${layout.section} mx-2`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Vision
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          To give the best customer experience to our clients and to be the top
          HVAC company in East Africa.
        </p>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Mission
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          To give the best HVAC solutions to our clients.
        </p>
      </div>
    </section>
  );
};

export default Business;
