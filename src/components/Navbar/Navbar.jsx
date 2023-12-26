import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={require("../../Assets/icon.png")} />
      </div>
      <div className={styles.navmiddle}>
        <div className={styles.navlink}>Home</div>
        <div className={styles.navlink}>Attorneys</div>
        <div className={styles.navlink}>Practice Areas</div>
        <div className={styles.navlink}>About Us</div>
      </div>
      <div>
        <button className={styles.navbtn}>Contact Now</button>
      </div>
    </div>
  );
}
export default Navbar;
