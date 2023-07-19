"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ExploreCard, TitleText, TypingText } from "@/components";
import styles from "@/app";
import { staggerContainer } from "@/utils/motion";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="explore__motion1"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="explore__hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
    </section>
  );
};
export default Explore;
