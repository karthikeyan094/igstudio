import React from "react";
import styles from "./Cardcontainer.module.css";
import Button from "../Button/Button";

function Cardcontainer() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>Why Choose us?</h1>
      <div className={styles.cardwrapper}>
        <div className={styles.card}>
          <img
            style={{ marginBottom: "24px" }}
            src={require("../../Assets/gift.png")}
          />
          <h1 className={styles.cardh1}>98% Success Rate</h1>
          <p className={styles.cardpara}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button>Read More</Button>
        </div>
        <div className={styles.card}>
          <img
            style={{ marginBottom: "24px" }}
            src={require("../../Assets/gift.png")}
          />
          <h1 className={styles.cardh1}>100% Success Rate</h1>
          <p className={styles.cardpara}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button>Read More</Button>
        </div>
        <div className={styles.card}>
          <img
            style={{ marginBottom: "24px" }}
            src={require("../../Assets/gift.png")}
          />
          <h1 className={styles.cardh1}>100% Success Rate</h1>
          <p className={styles.cardpara}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
}

export default Cardcontainer;
