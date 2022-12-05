//contact.jsx
import React, { useState } from "react";
import SendMessageButton from "./SendMessageButton";
import styles from "../style";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return alert(
      "Thank You For reaching out. We will respond to you as soon as we can!"
    );
  }

  return (
    <section id="contact_us" className={` ${styles.paddingY} `}>
      <div
        className="flex flex-col justify-center
      "
      >
        <div className={`${styles.heading2} mb-3 pt-0`}>
          <h3 className=" text-slate-900 font-serif">Contact Us</h3>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          Incase of any questions or enquiries, reach out to us using the form
          below
        </p>
        <form
          className={` bg-transparent rounded px-8 pt-6 pb-8 mb-4 mt-5`}
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 font-inter relative   rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="px-3 py-3 placeholder-gray-400 relative font-inter  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message"
              name="message"
              className="px-3 py-3 placeholder-gray-400 relative  font-inter rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <SendMessageButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
