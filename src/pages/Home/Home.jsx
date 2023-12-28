import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";
import Cardcontainer from "../../components/Cardcontainer/Cardcontainer";
import Imagecontainer from "../../components/Imagecontainer/Imagecontaier";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Let’s Introduce Ourself</h1>
        <div style={{ width: "475px" }} className={styles.wrapper2}>
          <h3 className={styles.h3}>Criminal Lawyer</h3>
          <p className={styles.p}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <Cardcontainer />
      <Imagecontainer />
    </div>
  );
}

export default Home;
