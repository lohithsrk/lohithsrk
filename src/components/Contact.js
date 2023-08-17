import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className='section px-5'
      id='contact'
    >
      <div className='container mx-auto flex'>
        <div className='flex items-center md:justify-center w-full md:h-screen'>

          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='w-full md:w-1/2 md:ml-16'
          >
            <h2 className='h2 text-accent text-center md:text-left'>Get in touch</h2>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-2'
            >
              <label className='flex flex-col cursor-pointer'>
                <span className='text-white font-medium mb-2 cursor-pointer'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='cursor-text bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-white/10'
                />
              </label>
              <label className='flex flex-col cursor-pointer'>
                <span className='text-white font-medium mb-2 cursor-pointer'>Your email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className='cursor-text bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-white/10'
                />
              </label>
              <label className='flex flex-col cursor-pointer'>
                <span className='text-white font-medium mb-2 cursor-pointer'>Your Message</span>
                <textarea
                  rows={5}

                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className='cursor-text bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-white/10 resize-none'
                />
              </label>

              <button
                type='submit'
                className='btn btn-lg md:!max-w-min w-full mt-3 cursor-pointer'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          {/* <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='h-[500px] w-[500px] pl-20'
          >
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
