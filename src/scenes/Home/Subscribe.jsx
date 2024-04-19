import React from "react";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
const Subscribe = () => {
  return (
    <section className="flex justify-center items-center mt-32 flex-col mb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl"
      >
        <MdEmail />
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl mt-4"
      >
        Subscribe To Our Newsletter
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-xl mt-3"
      >
        and receive $20 coupon for your first order when you checkout
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="divide-x-2 divide-slate-200 m-4 bg-slate-100 text-2xl border-4 border-slate-200 w-1/2 flex justify-between p-2"
      >
        <input
          className="w-full bg-slate-100 placeholder:bg-slate-100 px-2 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
        />

        <button type="submit" className="px-3">
          Subscribe
        </button>
      </motion.div>
    </section>
  );
};

export default Subscribe;
