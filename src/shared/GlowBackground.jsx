import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function GlowBackground(){
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [6, -6]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-6, 6]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <motion.div style={{ rotateX, rotateY }} className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[680px] h-[160px] rounded-full bg-[#00FFD1] opacity-20 blur-[120px]" />
      <div className="absolute -bottom-36 right-20 w-[520px] h-[360px] rounded-full bg-[#9D59FF] opacity-20 blur-[140px]" />
      <div className="absolute inset-0 opacity-8">
        <div className="bg-[size:40px_40px] w-full h-full" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)'}} />
      </div>
    </motion.div>
  );
}
