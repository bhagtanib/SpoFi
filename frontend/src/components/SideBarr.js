import styles from "./SideBar.module.css"

const SideBarr = () => {
  return (
    <div className={styles.side}>
      <div className={styles.logoName}>Spokane Father Initiative </div>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </div>
  )
}

export default SideBarr