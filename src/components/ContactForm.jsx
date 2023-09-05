//contact.jsx
import React, { useRef, useState } from "react";
import SendMessageButton from "./SendMessageButton";
import styles from "../style";
import { publicKey, serviceId, templateId } from "../constants/serviceIds";
import emailjs from "@emailjs/browser";

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        alert("Thank you. Please check your email for a response");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.log(error.text);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className={` ${styles.paddingY} `}>
      <div
        className="flex flex-col justify-center py-4 lg:py-8 mx-auto max-w-screen-md
      "
      >
        <div className={`${styles.heading2} mb-3 pt-0`}>
          <h3 className=" text-slate-900 font-serif text-center">
            Request Free Quote
          </h3>
        </div>
        <p className={`${styles.paragraph} text-slate-600  text-center mt-2`}>
          Ready to transform your air treatment experience? Have questions about
          our services? Reach out to us today. Coolmeqs Services and Supplies
          Ltd is here to redefine air treatment in Kenya and beyond.
        </p>
        <form
          className={` bg-transparent rounded px-2 pt-2 pb-3 mb-4 mt-1`}
          ref={formRef}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="grid grid-cols-2 gap-4 mt-5">
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
                name="name"
                className="shadow-sm bg-gray-50 font-poppins border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                onChange={handleChange}
                value={form.name}
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
                name="email"
                value={form.email}
                onChange={handleChange}
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
              name="phone"
              value={form.phone}
              onChange={handleChange}
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
              value={form.message}
              name="message"
              onChange={handleChange}
              id="message"
              rows="6"
              className="block p-2.5 w-full font-poppins text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter you message here..."
            ></textarea>
          </div>
          <div className="my-3 ">
            {loading ? (
              <SendMessageButton text="Sending ...." />
            ) : (
              <SendMessageButton text="Send Message" />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
