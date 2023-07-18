"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => (
  <section className="hero__section">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto "
    >
      <div className="hero__word">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="hero__bg" />
        <div className="hero__image">
          <Image
            src="/cover.png"
            alt="hero_cover"
            fill
            className="object-cover rounded-tl-[140px] rounded-tr-[100px]"
          />
        </div>

        <Link href="#explore">
          <div className="hero__stamp">
            <div className="hero__stampsize">
              <Image
                src="/stamp.png"
                alt="stamp"
                fill
                className=" object-contain"
              />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
