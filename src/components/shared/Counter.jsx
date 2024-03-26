"use client";
import CountUp from "react-countup";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ end }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };
  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <CountUp end={end} duration={5} start={isVisible ? 0 : null}>
      </CountUp>
    </VisibilitySensor>
  );
};

export default Counter;
