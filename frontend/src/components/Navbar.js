import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <ul className={styles.left}>
         <li>Classes</li>
         <li>Get Envolved</li>
         <li>About</li>
        </ul >
        <ul className={styles.right}>
         <li>Sign in</li>
         <li>Sign up</li>
        </ul >
    </div>
  )
}

export default Navbar