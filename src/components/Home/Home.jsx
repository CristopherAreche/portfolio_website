import React from "react";
import styles from "./Home.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`${styles.home} bg-dark w-100 py-1`}>
      <main className={`${styles.main} container`}>
        <p className={styles.hi_text}>Hi, my name is</p>
        <h1 className={styles.name_text}>Cristopher Areche.</h1>
        <h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 160,
              strings: ["I build things for the web.", "I am a web developer."],
            }}
          />
        </h2>
        <p className={styles.detail}>
          I'm a Front-end software engineer. I currently completed a +800-hour
          full stack development bootcamp at Henry.Currently, I'm focused on
          building accessible and useful React applications. I also have a great
          interest for the Fintech industry.
        </p>
        <div>
          <button className={styles.about_btn}>
            <a
              className={styles.text}
              href="https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
              target="_blank"
              rel="noreferrer"
            >
              More about me
            </a>
          </button>
        </div>
      </main>
    </div>
  );
};
export default Home;
