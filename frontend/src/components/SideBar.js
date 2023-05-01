import React from 'react'
import styles from  "./SideBar.module.css"

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      
      <div class={styles.sidenav}>
      <div className={styles.logoName}>Spokane Father Initiative
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
</div>
    </div>
  )
}

export default SideBar