import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}> <h1>Contact List</h1> <img src="https://img.icons8.com/ios/50/null/user-male-circle--v1.png" />  </div>
      <div className={styles.bottom}>
        <div className={styles.btns}>
          <button className={`${styles.btn} `}>Add New Contact</button>
          <button className={`${styles.btn} `}>Export</button>
        </div>
        <div className={`${styles.search} `}>
          <input type="text" id="fname" name="fname" />
        </div>
      </div>
    </div>
  )
}

export default Header