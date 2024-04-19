import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assest", false, /\.(png|jpe?g|svg)$/)
);

const Maincrul = () => {
  return (
    <section className=" relative">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {Object.values(heroTextureImports).map((textuse, index) => (
          <div key={`car-${index}`} className="h-[70vh] z-10">
            <img
              className="object-cover w-full h-full"
              src={textuse}
              alt={`car-${index}`}
            />
            <div className="absolute inset-0 h-full top-1/2 md:mx-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className=" text-start px-10 bg-black bg-opacity-40 w-fit p-4"
              >
                <p className=" text-red-500">-- NEW ITEMS</p>
                <p className="mb-2  text-5xl text-white">Summer Sale</p>
                <p className=" text-red-900">Discover More</p>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Maincrul;
