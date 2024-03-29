import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-black-gradient-2   ${styles.paddingX} ${styles.flexStart}`}
  >
    <div
      className={`${styles.flexStart} px-5 md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <div className="flex flex-row justify-between items-center w-full">
          <h4 className="flex-1 font-serif font-semibold ss:text-[35px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-secondary">COOLMEQS SERVICES</span>{" "}
          </h4>
        </div>
        <h4 className="font-serif font-semibold ss:text-[32px] text-[28px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          AND SUPPLIES LIMITED.
        </h4>
        <p
          className={`${styles.paragraph} text-white marker:mt-4 max-w-[312px]`}
        >
          Your doorstep service partner
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-serif font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row px-5 flex-col pt-6 border-t-[1px] border-t-[#131731]">
      <p className="font-serif font-normal text-center text-[18px] leading-[27px]  text-white">
        Copyright Ⓒ 2022 CoolMeqs. All Rights Reserved.
      </p>

      <div className="flex flex-row text-white md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain text-white cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
