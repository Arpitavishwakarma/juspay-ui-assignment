import React from 'react';
import GlowBackground from '../shared/GlowBackground';
import HeaderBadge from '../shared/HeaderBadge';
import CompanyInfo from '../shared/CompanyInfo';
import { motion } from 'framer-motion';

export default function JuspayAssignment() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] overflow-hidden">
      <GlowBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-left text-white px-6 max-w-5xl w-full"
      >
        <HeaderBadge />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.8 }}
          className="text-[56px] sm:text-[72px] md:text-[88px] leading-tight font-extrabold tracking-tight"
        >
          UI DEVELOPER <br/> ASSIGNMENT
        </motion.h1>
        <CompanyInfo />
      </motion.div>
    </div>
  );
}
