import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <SideBar className={styles.sidebar}> </SideBar>
      </div>

      <div className={styles.tabs}></div>
    </div>
  );
};

export default Home;
