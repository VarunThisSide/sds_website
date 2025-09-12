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
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 mb-5">
          {images.map((image, index) => (
            <div className="p-2" key={`${i}-${index}-0`}>
              <div
              key={`${i}-${index}`}
              className="h-[40px] w-[130px] md:h-[80px] md:w-[190px] relative">
              <Image fill src={image} alt="Logo" unoptimized className="object-contain md:px-3" />
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MarqueeItem;
