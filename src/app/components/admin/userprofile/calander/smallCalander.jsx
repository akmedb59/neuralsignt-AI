"use client";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./customStyles.css";


const SmallCalander = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value}  />
    </div>
  );
};

export default SmallCalander;
