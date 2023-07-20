"use client";

import { motion } from "framer-motion";

import styles from "@/app";
import { insights } from "@/constantdata";
import { staggerContainer } from "@/utils/motion";
import { InsightCard, TitleText, TypingText } from "@/components";

const Insights = () => (
  <section className="sm:p-16 xl:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="center" />
      <div className="insight__motion1">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
