import React from "react";
import { AiOutlineFrown } from "react-icons/ai";
import { motion } from "framer-motion";

interface Props {
  heading: string;
  message: string;
}

export const ErrorCard: React.FC<Props> = ({ heading, message }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
    className="border-l-8 border-red-500 bg-white p-4 flex items-center gap-4 mt-12"
  >
    <AiOutlineFrown className="text-5xl text-red-500" />
    <div>
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p>{message}</p>
    </div>
  </motion.div>
);
