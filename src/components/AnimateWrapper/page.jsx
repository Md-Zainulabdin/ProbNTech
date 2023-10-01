"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimateWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25, duration: 0.5, staggerChildren: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimateWrapper;
