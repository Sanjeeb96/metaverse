"use client";

import { motion } from "framer-motion";

import styles from "@/app";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={` ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } explore__card ease-out-flex`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      fill
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="explore__layer">
        <div className="flex justify-start items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
          <Image
            src="/headset.svg"
            alt="headset"
            fill
            className=" object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-5 text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-6 font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
