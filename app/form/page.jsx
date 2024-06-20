"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DavTool, DevTool } from "@hookform/devtools";

export default function Page() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      social: {
        twitter: "https://x.com/",
        facebook: "https://www.facebook.com/",
      },
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const submitData = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        action=""
        className="max-w-[960px] w-full flex flex-col gap-5"
        onSubmit={handleSubmit(submitData)}
        noValidate
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-bold">
              Name
            </label>
            <input
              type="text"
              className="border h-12 rounded p-2 focus:border focus:border-blue-600"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <p
              className={`{${
                errors.name?.message ? "block" : "hidden"
              } text-red-600`}
            >
              {errors.name?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-bold">
              Email
            </label>
            <input
              type="email"
              className="border h-12 rounded p-2 focus:border focus:border-blue-600"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
                  message: "Please recheck your email, your email is wrong",
                },
              })}
            />
            <p
              className={`{${
                errors.email?.message ? "block" : "hidden"
              } text-red-600`}
            >
              {errors.email?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="font-bold">
            Phone Number
          </label>
          <input
            type="text"
            className="border h-12 rounded p-2 focus:border focus:border-blue-600"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone number is required",
              },
              pattern: {
                value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
                message:
                  "Please recheck your phone number, your phone number is wrong",
              },
            })}
          />
          <p
            className={`{${
              errors.phone?.message ? "block" : "hidden"
            } text-red-600`}
          >
            {errors.phone?.message}
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="font-bold">
            Full Address
          </label>
          <textarea
            className="border h-20 rounded p-2 focus:border focus:border-blue-600"
            {...register("address", {
              required: {
                value: true,
                message: "Address is required",
              },
            })}
          ></textarea>
          <p
            className={`{${
              errors.address?.message ? "block" : "hidden"
            } text-red-600`}
          >
            {errors.address?.message}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-bold">
              Twitter
            </label>
            <input
              type="url"
              className="border h-12 rounded p-2 focus:border focus:border-blue-600"
              {...register("social.twitter", {
                required: {
                  value: true,
                  message: "Twitter link is required",
                },
              })}
            />
            <p
              className={`{${
                errors.social?.twitter?.message ? "block" : "hidden"
              } text-red-600`}
            >
              {errors.social?.twitter?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-bold">
              Facebook
            </label>
            <input
              type="url"
              className="border h-12 rounded p-2 focus:border focus:border-blue-600"
              {...register("social.facebook", {
                required: {
                  value: true,
                  message: "Facebook Url is required",
                },
              })}
            />
            <p
              className={`{${
                errors.social?.facebook?.message ? "block" : "hidden"
              } text-red-600`}
            >
              {errors.social?.facebook?.message}
            </p>
          </div>
        </div>

        <button className="bg-green-700 text-white rounded-sm h-12">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
