//contact.jsx
import React, { useState } from "react";
import SendMessageButton from "./SendMessageButton";
import styles from "../style";

const FORM_ENDPOINT = "";

const RequestQuote = () => {
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
    <section id="contact_us" className={` rounded-sm bg-slate-100 p-2`}>
      <div
        className="flex flex-col justify-center py-4 lg:py-2 mx-auto max-w-screen-md
      "
      >
        <div className={`${styles.heading2} pt-0 mb-3`}>
          <h3 className=" text-slate-900 font-serif  text-xl">
            Request Free Quote
          </h3>
        </div>

        <form
          className={` bg-transparent rounded px-2 pt-2 pb-3 mb-4 mt-1`}
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="flex justify-between my-2 gap-2">
            <div className="">
              <label
                for="name"
                className="block mb-2 text-xs font-poppins font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 font-poppins border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                required
              />
            </div>
            <div className="">
              <label
                for="email"
                className="block mb-2 text-xs font-poppins font-medium text-gray-900 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 font-poppins border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label
              for="phone"
              className="block mb-2 text-xs font-poppins font-medium text-gray-900 dark:text-gray-300"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="block p-3 font-poppins w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Phone Number"
              required
            />
          </div>
          <div class="sm:col-span-2 my-2">
            <label
              for="message"
              className="block mb-2 text-xs font-poppins font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full font-poppins text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter you message here..."
            ></textarea>
          </div>
          <div className="my-3 ">
            <SendMessageButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestQuote;
