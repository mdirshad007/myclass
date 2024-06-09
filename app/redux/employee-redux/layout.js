import React from "react";
import EmployeeProvider from "./EmployeeProvider";
// import Providers from "../providers";

export default function ReduxLayout({ children }) {
  return (
    <div className="max-w-[960px] mx-auto py-8 w-full px-5">
      <div>
        <h1 className="text-2xl font-bold capitalize mb-5">
          You are under redux Employee Layout
        </h1>
      </div>
      <hr className="mb-5" />
      <EmployeeProvider>{children}</EmployeeProvider>
    </div>
  );
}
