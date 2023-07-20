"use client";

import { motion } from "framer-motion";

import styles from "@/app";
import { startingFeatures } from "@/constantdata";
import { StartSteps, TitleText, TypingText } from "@/components";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import Image from "next/image";

const GetStarted = () => (
  <section className="start__section">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="start__motion"
    >
      <motion.div variants={planetVariants("left")} className="start__motion1">
        <Image
          src="/get-started.png"
          alt="get-started"
          fill
          className=" object-contain start__image"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="tart__motion2"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="about__motion3">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
