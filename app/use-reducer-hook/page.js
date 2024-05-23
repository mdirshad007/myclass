"use client";
import React, { useReducer } from "react";

export default function Page() {
  const initialState = 0;
  const reducer = (state, action) => {
    // Modify state based on action
    switch (action.type) {
      case "add":
        return state + 1;
      case "min":
        if (state > 0) {
          return state - 1;
        }
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="w-full md:w-[1200px] mx-auto justify-between mt-6 flex-wrap">
        <p className="text-center mb-4 text-5xl">{state}</p>
        <div className="flex justify-center gap-5">
          <button
            className="text-3xl bg-gray-200 p-2 px-11"
            onClick={() => dispatch({ type: "add" })}
          >
            +
          </button>
          <button
            className="text-3xl bg-gray-200 p-2 px-11"
            onClick={() => dispatch({ type: "min" })}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
