import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { addToCart } from "../state";
import { increaseCount, decreaseCount, removeFromCart } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
const Item = (item) => {
  const [hover, sethover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setcount] = useState(1);
  const cart = useSelector((state) => state.cart.cart);
  let a = true;
  let itemf = true;
  const aa = () => {
    if (cart.length !== 0) {
      cart.map((itemm) => {
        if (item.item.id === itemm.item.id) {
          a = false;
          itemf = itemm;
        }
      });
    }
  };
  aa();
  return (
    <section className="w-[300px] min-h-[450px] ">
      <div
        className="relative"
        onMouseOver={() => sethover(true)}
        onMouseOut={() => sethover(false)}
      >
        {a ? (
          <div
            className={`${
              hover ? "visible" : "hidden"
            } absolute flex flex-row justify-between w-full duration-700 px-4 bottom-0 pb-3`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              className={`flex text-xl bg-slate-100  items-center rounded-md p-2 gap-1 bg-opacity-70`}
            >
              <button onClick={() => setcount(Math.max(count - 1, 1))}>
                <IoMdRemove />
              </button>
              <p>{count}</p>
              <button onClick={() => setcount(count + 1)}>
                <IoMdAdd />
              </button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 25 },
                visible: { opacity: 1, x: 0 },
              }}
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
            >
              <button
                className={` text-xl bg-slate-100 items-center rounded-md p-2 truncate bg-opacity-70`}
              >
                add to cart
              </button>
            </motion.div>
          </div>
        ) : (
          <div
            className={`${
              hover ? "visible" : "hidden"
            } absolute flex flex-row-reverse justify-between w-full px-4 bottom-0 pb-3`}
          >
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 25 },
                visible: { opacity: 1, x: 0 },
              }}
              className={`flex text-xl bg-slate-100 justify-between items-center rounded-md  p-2 gap-1 bg-opacity-70`}
              onClick={() => dispatch(removeFromCart({ id: itemf.item.id }))}
            >
              <MdClose />
            </motion.button>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              className={`flex text-xl bg-slate-100 justify-between items-center rounded-md w-1/2 p-2 gap-1 bg-opacity-70`}
            >
              <button
                onClick={() => dispatch(decreaseCount({ id: itemf.item.id }))}
              >
                <IoMdRemove />
              </button>
              <p>{itemf.count}</p>
              <button
                onClick={() => dispatch(increaseCount({ id: itemf.item.id }))}
              >
                <IoMdAdd />
              </button>
            </motion.div>
          </div>
        )}
        <div className="">
          <img
            className="min-w-[300px] min-h-[450px] object-cover cursor-pointer"
            src={`http://localhost:1337${item.item.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
      </div>
      <div className="mx-4">
        <p>{item.item.attributes.category}</p>
        <p>{item.item.attributes.name}</p>
        <p>{item.item.attributes.price} $</p>
      </div>
    </section>
  );
};

export default Item;
