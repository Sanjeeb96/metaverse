"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "@/app";
import { TitleText, TypingText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="world__motion1"
    >
      <TypingText title="| People on the World" textStyles="center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="world__motion"
      >
        <Image
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
          fill
        />

        <div className="world__p1">
          <Image
            src="/people-01.png"
            alt="people"
            width={70}
            height={70}
            className="w-full h-full"
          />
        </div>

        <div className="world__p2">
          <Image
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
            width={70}
            height={70}
          />
        </div>

        <div className="world__p3">
          <Image
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
            width={70}
            height={70}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
