import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setIsCartOpen } from "../../state";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import {useNavigate} from 'react-router-dom'
import { increaseCount ,decreaseCount } from "../../state";
const CartMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const iscartopen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.item.attributes.price*item.count;
  }, 0);
  return (
    <section
      className={`${
        iscartopen ? "visible" : "invisible"
      } fixed z-40 w-full h-screen  `}
    >
      <div className="lg:w-1/3 w-2/4 h-screen bg-white fixed opacity-100 right-0 flex items-start flex-col divide-y-2 p-4 justify-between">
        <div className="w-full pt-4">
          <div className="text-4xl  flex flex-row-reverse justify-between items-center w-full">
            <button
              onClick={() => dispatch(setIsCartOpen({}))}
              className="z-50  "
            >
              <IoClose />
            </button>
            <p className="line-clamp-1 text-wrap	  w-full">SHOPING BAG ( {cart.length} )</p>
          </div>
          <div className=" overflow-y-auto h-[75vh] w-full gap-3 flex flex-col divide-y-2 mt-8">
            {cart.map((item) => (
              <div className="flex justify-evenly pt-2">
                
                <div className="h-[164px] w-[123px]">
                  <img
                    src={`http://localhost:1337${item.item.attributes.image.data.attributes.formats.medium.url}`}
                    alt={item.item.attributes.name}
                    className="w-full h-full"
                  />
                </div>

                <div className="basis-1/2 pt-8 text-xl">
                  <div className="flex justify-between ">
                    <p>{item.item.attributes.name}</p>
                    <p>
                      {
                        item.item.attributes.shortDescription[0].children[0]
                          .text
                      }
                    </p>
                    <button
                      onClick={() =>
                        dispatch(removeFromCart({ id: item.item.id }))
                      }
                    >
                      <MdClose />
                    </button>
                  </div>
                  <div className="w-full mt-8">
                    <div
                      className={`flex text-xl bg-slate-100 w-full justify-between items-center rounded-md p-2 gap-1 bg-opacity-70`}
                    >
                      <button onClick={() => dispatch(decreaseCount({id:item.item.id}))}>
                        <IoMdRemove />
                      </button>
                      <p>{item.count}</p>
                      <button onClick={() => dispatch(increaseCount({id:item.item.id}))}>
                        <IoMdAdd />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="flex flex-col ">
            <div className="flex justify-between p-3">
              <p>SUBTOTAL</p>
              <p>${totalPrice}</p>
            </div>
            <button onClick={()=>{
              navigate('/Checkout')
              dispatch(setIsCartOpen({}))
            }} className="w-2/3 p-2 mx-auto bg-slate-100 border-2 border-slate-200 font-semibold text-black rounded-md">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 w-2/4  bg-black opacity-25 fixed h-screen"></div>
    </section>
  );
};

export default CartMenu;
