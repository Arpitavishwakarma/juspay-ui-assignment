import React from 'react';
import { motion } from 'framer-motion';
export default function HeaderBadge(){
  return (
    <motion.div whileHover={{ scale: 1.04 }} className="inline-block mb-8 px-5 py-2 bg-[#FFCC00] text-black font-semibold text-sm rounded-md tracking-wider shadow-sm">
      ASSIGNMENT
    </motion.div>
  );
}
