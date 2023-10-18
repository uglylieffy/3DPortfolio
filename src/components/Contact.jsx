import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
// template_qund6ac
// service_j66jcm4
// L2_4KoE-47wgf7zjK

  const handleChange = (e) => {
    // const { target } = e;
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_j66jcm4',
      'template_qund6ac',
      {
        from_name: form.name,
        to_name: "Yuqi",
        from_email: form.email,
        to_email: "1241672068@qq.com",
        message: form.message,
      },
      'L2_4KoE-47wgf7zjK'
    )
    .then(() => {
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

        alert("Ooops, something went wrong. Please try again.");
      }
    );
  }

  return (
    // initialize contact card
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        //  do a slide-in effect where the card slide in from the left
        // and the earth slide in from the right
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Tell me something about you!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* initilize form with 3 sections, name, emails and message */}
        <form
        ref={formRef}
        // handle submit 
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        > 
          {/* name and email shares the same properties,both are input,
          just with different name and type */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* message is a textarea instead of the 'input' */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            What would you like to tell me? 
            </span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="All are welcomed &#128516;"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button 
          type="Submit"
          className='bg-tertiary py-3 px-8 rounded-xl outline-none 
          w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* 3d earth */}
      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact")
// export default Contact