import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import SideBar from "./SideBar";
import Table from "./Table";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <SideBar className={styles.sidebar}> </SideBar>
      </div>

      <div className={styles.tabs}>
        <Table></Table>
      </div>
    </div>
  );
};

export default Home;
