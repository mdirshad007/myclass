import React from "react";
import Name from "./Name";
import Subject from "./Subject";
import Section from "./Section";

export default function Page() {
  return (
    <div className="max-w-[960px] mx-auto py-8">
      <h1>Student Record</h1>
      <Name name="Irshad" />
      <Subject subject="React" />
      <Section section="B" />
    </div>
  );
}
