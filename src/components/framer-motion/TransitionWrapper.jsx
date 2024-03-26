"use client";
import React from "react";
import { motion } from "framer-motion";

export const TransitionWrapper1 = ({ index, children }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <motion.div
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export const TransitionWrapper2 = ({ index, children }) => {
  const fadeInRightLeft = {
    initial: {
      opacity: 0,
      translateX: index % 2 === 0 ? -70 : 70,
      translateY: -70,
    },
    animate: (index) => ({
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: { duration: 0.3, delay: index * 0.05 },
    }),
  };
  return (
    <motion.div
      key={index}
      variants={fadeInRightLeft}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};
