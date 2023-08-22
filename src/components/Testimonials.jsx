import { card } from "../assets";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-10`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What are people
        <br className="sm:block hidden" /> saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Join these satisfied clients and experience the Coolmeqs difference
          for yourself. Contact us today for a breath of fresh and comfortable
          air.
        </p>
      </div>
    </div>
    <div className="grid md:grid-cols-3 sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
