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

  let initialStateAccordion = null;
  const accordionReducer = (state, action) => {
    switch (action.type) {
      case "open":
        return (state = 1);
      case "close":
        return state=null;
      default:
        return state=null;
    }
  };
  const [accordionState, accordionDispatch] = useReducer(
    accordionReducer,
    initialStateAccordion
  );

  const bgColor=["bg-red-600","bg-green-600","bg-blue-700"]
  let initialBgIndex=0;

  const bgReducer=(state,action)=>{
    return state
  }
  const [bgState,bgDispatch]=useReducer(bgReducer,initialBgIndex)
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

        <div className="mt-9">
          <hr className="mb-9" />
          <button
            className="bg-slate-200 px-4 py-2 font-bold"
            onClick={() => {
              console.log("=====>",accordionState)
              if(!accordionState){
                accordionDispatch({ type: "open" })
              }
              else{
                accordionDispatch({ type: "close" })
              }
            }}
          >
            Read More <span className="w-3 inline-block">{accordionState > 0 ? "-" : "+"}</span>
          </button>
          <p className={`px-4 py-2 ${accordionState > 0 ? "block" : "hidden"}`}>
            Hello world
          </p>
        </div>

        <div className="mt-9">
          <hr className="mb-9" />
          <h2 className="text-2xl mb-3">
            Bg Color change on click
          </h2>
          <button
            className="bg-slate-200 px-4 py-2 font-bold"
            onClick={() => {
              console.log("=====>",accordionState)
              if(!accordionState){
                accordionDispatch({ type: "open" })
              }
              else{
                accordionDispatch({ type: "close" })
              }
            }}
          >
            Change color
          </button>
          <div className={`w-52 h-52 bg-red-600 mt-7`}>

          </div>
        </div>
      </div>
    </div>
  );
}
