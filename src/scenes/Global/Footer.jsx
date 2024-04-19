import React from "react";

const Footer = () => {
  return (
    <section className="mt-16 p-10 bg-slate-100 text-center ga16 md:flex md:text-start">
      <div className="w-4/5 flex justify-between flex-col flex-wrap mx-auto basis-1/4">
        <h3 className="font-semibold ">AHTT</h3>
        <h4 className="w-10/12 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </h4>
      </div>
      <div className="basis-1/4 flex justify-between flex-col mx-auto">
        <h3 className="font-semibold font-Cinzel">About Us</h3>
        <h4 className=" font-Cinzel">Careers</h4>
        <h4 className=" font-Cinzel">Our Stores</h4>
        <h4 className=" font-Cinzel">Terms & Conditions</h4>
        <h4 className=" font-Cinzel">Privacy Policy</h4>
      </div>
      <div  className="basis-1/4 flex justify-between flex-col mx-auto">
        <h3 className="font-semibold font-Cinzel">Customer Care</h3>
        <h4 className=" font-Cinzel">Help Center</h4>
        <h4 className=" font-Cinzel">Track Your Order</h4>
        <h4 className=" font-Cinzel">Corporate & Bulk Purchasing</h4>
        <h4 className=" font-Cinzel">Returns & Refunds</h4>
      </div>
      <div  className="basis-1/4 flex justify-between flex-col mx-auto">
        <h3 className="font-semibold font-Cinzel">Contact Us</h3>
        <h4 className=" font-Cinzel"> 50 north Whatever Blvd, Washington, DC 10501</h4>
        <h4 className=" font-Cinzel">Email: mredwardroh@gmail.com</h4>
        <h4 className=" font-Cinzel">(222)333-4444</h4>
      </div>
    </section>
  );
};

export default Footer;
