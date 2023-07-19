"use client";

import styles from "@/app";
import { TypingText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const About = () => (
  <section className="sm:p-16 xl:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="about__motion1"
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="about__motion2"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like its really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Lets <span className="font-extrabold text-white">explore</span>{" "}
        the madness of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="object-contain"
        height={28}
        width={18}
      />
    </motion.div>
  </section>
);

export default About;
