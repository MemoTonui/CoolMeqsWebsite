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
        className="flex flex-col justify-center py-4 lg:py-8 mx-auto max-w-screen-md
      "
      >
        <div className={`${styles.heading2} mb-3 pt-0`}>
          <h3 className=" text-slate-900 font-serif text-center">Contact Us</h3>
        </div>
        <p className={`${styles.paragraph}  text-center mt-2`}>
        Ready to transform your air treatment experience? Have questions about our services? Reach out to us today. Coolmeqs Services and Supplies Ltd is here to redefine air treatment in Kenya and beyond.
        </p>
        <form
          className={` bg-transparent rounded px-2 pt-6 pb-8 mb-4 mt-5`}
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="my-5">
            <label
              for="email"
              className="block mb-2 text-sm font-poppins font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 font-poppins border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="my-5">
            <label
              for="subject"
              className="block mb-2 text-sm font-poppins font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 font-poppins w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2 my-5">
            <label
              for="message"
              className="block mb-2 text-sm font-poppins font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full font-poppins text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter you message here..."
            ></textarea>
          </div>
          <div className="mb-3 pt-0 flex items-end">
            <SendMessageButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
