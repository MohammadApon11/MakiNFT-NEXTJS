"use client";
import React from "react";
import { motion } from "framer-motion";

const RightLeft = ({ side, duration, children }) => {
  const RightLeft = {
    initial: {
      opacity: 0,
      x: side,
      transition: { ease: "easeInOut", duration: duration, delay: 0.05 },
    },
    animate: {
      opacity: 1,
      x: "0",
      transition: { ease: "easeInOut", duration: duration, delay: 0.05 },
    },
  };

  return (
    <motion.div
      variants={RightLeft}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RightLeft;
