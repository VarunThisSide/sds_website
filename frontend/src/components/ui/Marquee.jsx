import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient overflow-hidden">
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0">
          {images.map((image, index) => (
            <div className="p-2" key={`${i}-${index}-0`}>
              <div
              key={`${i}-${index}`}
              className="h-[50px] w-[50px] sm:h-[90px] sm:w-[90px] relative">
              <Image fill src={image} alt="Logo" unoptimized className="object-contain" />
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MarqueeItem;
