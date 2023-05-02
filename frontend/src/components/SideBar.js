import React from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
      <div class={styles.sidenav}>
        <div className={styles.logoName}>
          <img src ="https://spofi.org/wp-content/uploads/2023/03/cropped-Fatherhood-logo-block-1-1-300x96.png"></img>
        </div>
          <p>Contact Manager</p>
          <a href="#student">Student Information</a>
          <a href="#faculty">Faculty Information</a>
          <a href="#classes">Classes</a>
          <a href="#mentor">Mentor Matching</a>
          <a href="#church">Church List</a>
        </div>
      
  );
};

export default SideBar;
