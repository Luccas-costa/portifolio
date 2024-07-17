import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface BurguerMenuProps {
  handlerclose: () => void;
}

export default function BurguerMenu({ handlerclose }: BurguerMenuProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 700);
    return () => clearTimeout(timer); // Limpeza do timer quando o componente for desmontado
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className='absolute rounded-[100%] top-0 left-0 w-[300%] h-[300%] bg-purple-700'
          style={{ translateX: "-19%", translateY: "-48%", zIndex: 1 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className='flex items-center justify-center h-full'>
            {/* oque eu quiser por dentro */}
          </div>
        </motion.div>
      )}

      <motion.div
        className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-white overflow-hidden'
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className='flex flex-col items-center justify-center h-full '>
          <button
            className='p-4 focus:outline-none text-black'
            onClick={handlerclose}
          >
            <a href='#'>home</a>
          </button>
          <hr className='w-full h-3 bg-white border-black rounded' />
          <button
            className='p-4 focus:outline-none text-black'
            onClick={handlerclose}
          >
            <a href='#'>sobre</a>
          </button>
          <hr className='w-full h-3 bg-white border-black rounded' />
          <button
            className='p-4 focus:outline-none text-black'
            onClick={handlerclose}
          >
            <a href='#'>contato</a>
          </button>
        </div>
      </motion.div>
    </>
  );
}
