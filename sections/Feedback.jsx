"use client";

import { motion } from "framer-motion";

import styles from "@/app";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Image from "next/image";

const Feedback = () => (
  <section className="feedback__section">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="feedback__motion"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="feedback__box"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="feedback__name">Samantha</h4>
          <p className="feedback__p">Founder Metaverus</p>
        </div>

        <p className="feedback__p1">
          “With the development of todays technology, metaverse is very useful
          for todays work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="feedback__image"
      >
        <Image
          src="/planet-09.png"
          alt="planet-09"
          height={210}
          width={600}
          className="feedback__image1 object-cover"
        />

        <motion.div variants={zoomIn(0.4, 1)} className="feedback__image2">
          <Image
            src="/stamp.png"
            alt="stamp"
            height={155}
            width={155}
            className=" object-contain feedback__stampsize "
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
