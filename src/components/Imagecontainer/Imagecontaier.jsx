import React from "react";
import styles from "./Imagecontainer.module.css";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function Imagecontainer() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Area of Practices</h1>
      <div>
        <Box className={styles.imgWrapper}>
          <Grid container spacing={2}>
            {itemData.map((data, idx) => (
              <Grid
                className={styles.imgContainer}
                item
                xs={idx == 0 || idx == 3 || idx == 4 ? 8 : 4}
              >
                <img src={data.img} />
                <p className={styles.imgTitle}>{data.title}</p>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Imagecontainer;

const itemData = [
  {
    img: require("../../Assets/im1.jpg"),
    title: "BUSINESS LAW",
  },
  {
    img: require("../../Assets/im2.jpg"),
    title: "Partnership LAW",
  },
  {
    img: require("../../Assets/im3.jpg"),
    title: "REAL ESTATE LAW",
  },
  {
    img: require("../../Assets/im4.jpg"),
    title: "BUSINESS LAW",
  },
  {
    img: require("../../Assets/im5.jpg"),
    title: "LANDLORD DISPUTES",
  },
  {
    img: require("../../Assets/im6.jpg"),
    title: "ELDER ABUSE",
  },
];
