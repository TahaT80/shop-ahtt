import React, { useEffect } from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import Item from "../../component/item";
import { motion } from "framer-motion";
const Shopping = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [value, setValue] = useState("all");
  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemJson = await items.json();
    dispatch(setItems(itemJson.data));
  }
  useEffect(() => {
    getItems();
  }, []);

  const topnewArriver = items.filter(
    (item) => item.attributes.category === "newArriver"
  );
  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRare"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestseler"
  );

  return (
    <section className="flex justify-center items-center mt-14 flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="text-2xl">
          OUR FEATURED <b>PRODUCT</b>
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5,delay:0.3 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className=""
      >
        <Tabs value={value}>
          <Tab onClick={() => setValue("all")} label="ALL" value="all" />
          <Tab
            onClick={() => setValue("newArrivals")}
            label="NEW ARRIVALS"
            value="newArrivals"
          />
          <Tab
            onClick={() => setValue("bestSellers")}
            label="BEST SELLERS"
            value="bestSellers"
          />
          <Tab
            onClick={() => setValue("TOPRATED")}
            label="TOP RATED"
            value="TOPRATED"
          />
        </Tabs>
      </motion.div>
      <motion.div className="flex flex-wrap gap-16 xl:gap-32 items-center justify-center grid-cols-4 mx-auto mt-6 ">
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArriver" &&
          topnewArriver.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "TOPRATED" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </motion.div>
    </section>
  );
};

export default Shopping;
