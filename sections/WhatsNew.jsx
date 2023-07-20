"use client";

import { motion } from "framer-motion";

import styles from "@/app";
import { newFeatures } from "@/constantdata";
import { NewFeatures, TitleText, TypingText } from "@/components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="new__motion"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="new__motion1"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>Whats new about Metaversus?</>} />
        <div className="new__title">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div variants={planetVariants("right")} className="new__image">
        <Image
          src="/whats-new.png"
          alt="get-started"
          fill
          className="object-contain new__imagesize"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
