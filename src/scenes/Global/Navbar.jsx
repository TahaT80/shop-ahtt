import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { setIsCartOpen } from "../../state";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [istop, setistop] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const handelScrol = () => {
      if (window.scrollY === 0) {
        setistop(true);
      } else setistop(false);
    };
    window.addEventListener("scroll", handelScrol);
    return () => window.removeEventListener("scroll", handelScrol);
  }, []);

  return (
    <nav
      className={`${
        istop ? "" : "bg-slate-100"
      } w-full fixed top-0 left-0 px-16 flex z-20 justify-between items-center p-5 text-3xl font-semibold font-serif bg-opacity-80`}
    >
      <div>
        <p onClick={() => navigate("/")} className="cursor-pointer">
          AHTT
        </p>
      </div>
      <div className="flex gap-10 text-xl ">
        <button>
          <FaSearch />
        </button>
        <button>
          <FaAlignJustify />
        </button>
        <button
          className="relative"
          onClick={() => dispatch(setIsCartOpen({}))}
        >
          {cart.length ? (
            <small className="absolute translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full p-3 w-5 h-5 flex items-center justify-center">
              {cart.length}
            </small>
          ) : (
            <small className="absolute translate-x-1/2 -translate-y-1/2 rounded-full p-3 w-5 h-5 flex items-center justify-center">

            </small>
          )}

          <FaBasketShopping />
        </button>
        <button>
          <IoMdPerson />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
