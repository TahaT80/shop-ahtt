import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
const Checkout = () => {
  const [activeStep, setactiveStep] = useState(0);

  const handleFormSubmit = async () => {
    setactiveStep(activeStep + 1);
  };

  const formik_step1 = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      street1: "",
      city: "",
      state: "",
      zipCode: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    onSubmit: (values) => {
      handleFormSubmit();
    },
  });

  const formik_step2 = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("required"),
      phoneNumber: yup.string().required("required"),
    }),
    onSubmit: (values) => {
      handleFormSubmit();
    },
  });

  return (
    <section className="pt-32 mx-16">
      <div>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Billing</StepLabel>
          </Step>
          <Step>
            <StepLabel>payment</StepLabel>
          </Step>
        </Stepper>
        {activeStep === 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              onSubmit={formik_step1.handleSubmit}
              className="grid-cols-2 grid w-full gap-5 pt-16 "
            >
              <div className="relative group">
                <input
                  className="border-2 w-full h-10 px-4 rounded-sm peer  outline-none"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.firstName}
                  required
                />
                <label
                  htmlFor="firstName"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  First Name
                </label>
                {formik_step1.touched.firstName &&
                formik_step1.errors.firstName ? (
                  <div className="text-red-600">
                    {formik_step1.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="relative group">
                <input
                  id="lastName"
                  className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                  name="lastName"
                  type="text"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.lastName}
                  required
                />
                <label
                  htmlFor="lastName"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  last Name
                </label>

                {formik_step1.touched.lastName &&
                formik_step1.errors.lastName ? (
                  <div className="text-red-600">
                    {formik_step1.errors.lastName}
                  </div>
                ) : null}
              </div>

              <div className="col-span-2 relative group">
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.country}
                  required
                />
                <label
                  htmlFor="country"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  country
                </label>

                {formik_step1.touched.country && formik_step1.errors.country ? (
                  <div className="text-red-600">
                    {formik_step1.errors.country}
                  </div>
                ) : null}
              </div>

              <div className="relative group">
                <input
                  id="street1"
                  name="street1"
                  type="text"
                  required
                  className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.street1}
                />
                <label
                  htmlFor="street1"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  street1
                </label>

                {formik_step1.touched.street1 && formik_step1.errors.street1 ? (
                  <div className="text-red-600">
                    {formik_step1.errors.street1}
                  </div>
                ) : null}
              </div>

              <div className="relative group">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.city}
                />
                <label
                  htmlFor="city"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  city
                </label>

                {formik_step1.touched.city && formik_step1.errors.city ? (
                  <div className="text-red-600">{formik_step1.errors.city}</div>
                ) : null}
              </div>

              <div className="relative group">
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.state}
                />
                <label
                  htmlFor="state"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  state
                </label>

                {formik_step1.touched.state && formik_step1.errors.state ? (
                  <div className="text-red-600">
                    {formik_step1.errors.state}
                  </div>
                ) : null}
              </div>

              <div className="relative group">
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  required
                  className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                  onChange={formik_step1.handleChange}
                  onBlur={formik_step1.handleBlur}
                  value={formik_step1.values.zipCode}
                />
                <label
                  htmlFor="zipCode"
                  className="transform  transition-all text-sm absolute   m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
                >
                  zipCode
                </label>

                {formik_step1.touched.zipCode && formik_step1.errors.zipCode ? (
                  <div className="text-red-600">
                    {formik_step1.errors.zipCode}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="col-span-2 bg-black text-white p-2"
              >
                Next
              </button>
            </form>
          </motion.div>
        )}
        {activeStep === 1 && (
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            onSubmit={formik_step2.handleSubmit}
            className="grid-cols-2 grid w-full gap-5 pt-16 "
          >
            <div className="relative group">
              <input
                id="email"
                name="email"
                type="text"
                required
                className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                onChange={formik_step2.handleChange}
                onBlur={formik_step2.handleBlur}
                value={formik_step2.values.email}
              />
              <label
                htmlFor="email"
                className="transform  transition-all text-sm absolute  bg-white m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
              >
                email
              </label>

              {formik_step2.touched.email && formik_step2.errors.email ? (
                <div className="text-red-600">{formik_step2.errors.email}</div>
              ) : null}
            </div>

            <div className="relative group">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                required
                className="border-2 w-full h-10 px-4 rounded-sm peer  peer outline-none"
                onChange={formik_step2.handleChange}
                onBlur={formik_step2.handleBlur}
                value={formik_step2.values.phoneNumber}
              />
              <label
                htmlFor="phoneNumber"
                className="transform  transition-all text-sm absolute  bg-white m-3  left-0  top-0 
              group-focus-within:text-xs peer-valid:text-xs group-focus-within:-translate-y-1/2 peer-valid:-translate-y-1/2   group-focus-within:m-0 peer-valid:m-0  group-focus-within:translate-x-1
                 peer-valid:translate-x-1
              "
              >
                phoneNumber
              </label>

              {formik_step2.touched.phoneNumber &&
              formik_step2.errors.phoneNumber ? (
                <div className="text-red-600">
                  {formik_step2.errors.phoneNumber}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="col-span-2 bg-black text-white p-2"
            >
              Place Order
            </button>
          </motion.form>
        )}
        {activeStep === 2 && (
          <div className="mt-5">
            <div
              class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4"
              role="alert"
            >
              <p class="font-bold">Success</p>
              <p>Congratulations, Your purchase has been made.</p>
            </div>
            31{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default Checkout;
