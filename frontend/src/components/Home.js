import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import SideBarr from "./SideBarr";
import Table from "./Table";
import Header from "./Header";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <SideBarr className={styles.sidebar}> </SideBarr>
      </div>

      <div className={styles.tabs}>
        <Header />
        <Table />
      </div>
    </div>
  );
};

export default Home;
