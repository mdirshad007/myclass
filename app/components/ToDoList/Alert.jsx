import React from "react";

export default function Alert({ resultStatus, className, msg }) {
  return (
    <div className="flex justify-start">
      <p
        className={`font-bold rounded-md w-full transition-all mb-5 ${className} ${
          resultStatus != 0 ? "opacity-1 h-auto px-3 py-4" : "opacity-0 h-0"
        }`}
      >
        {msg}
      </p>
    </div>
  );
}
