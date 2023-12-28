import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { ReactComponent as Iconemail } from "../../Assets/email.png";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.herocontent}>
        <h1 className={styles.heroh1}>You don’t have to Fight them Alone.</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.inputcontainer}>
          <input placeholder="Enter your eamil address" />
          <div className={styles.btn1}>
            <Button>Let's Talk</Button>
          </div>
        </div>
      </div>

      <div>
        <img src={require("../../Assets/hero.png")} />
      </div>
    </div>
  );
}

export default Hero;
