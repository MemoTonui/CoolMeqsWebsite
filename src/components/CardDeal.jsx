import {
  card,
  group,
  group2,
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={` ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get the Best Heat, <br className="sm:block hidden" />
        Ventilation and Air Conditioning Services
      </h2>
      <p className={`${styles.paragraph} max-w-[510px] mt-5`}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>

      <Button styles="mt-8" />
    </div>
    <div className={layout.sectionImg}>
      <div class=" px-5">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2  flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image1}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-3/4 w-full rounded-lg object-cover object-center"
                src={image3}
              />
            </div>
          </div>
          <div class="flex w-1/2 h-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;
