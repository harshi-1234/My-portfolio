import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harshitha</h1>
        <p className={styles.description}>
          I'm a passionate and curious computer science student with strong problem-solving skills. I have experience in full-stack web development, cloud computing, and Android studio domains. I'm looking for opportunities to
          contribute and work in a challenging environment!
        </p>
        <a href="mailto:himakss31@gmail.com" className={styles.contactBtn}>
          Connect with me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hima.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
