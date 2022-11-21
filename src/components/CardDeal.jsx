import { card,group,group2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get the Best Heat, <br className="sm:block hidden" />
        Ventilation and Air Conditioning Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>

      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={group2} alt="" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
