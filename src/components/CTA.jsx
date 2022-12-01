import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] text-white box-shadow`}
  >
    <div className="flex-1 flex flex-col text-white">
      <h2 className={`${styles.heading2} text-white`}>Let's try our service now !</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        We are a team of passionate, talented individuals who work to make sure
        our clients receive the best of our services.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 shadow-sm`}>
      <Button />
    </div>
  </section>
);

export default CTA;
