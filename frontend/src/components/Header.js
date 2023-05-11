import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}> <h1>CONTACT LIST</h1> <img src="https://img.icons8.com/ios/50/null/user-male-circle--v1.png" />  </div>
      <div className={styles.bottom}>
        <div className={styles.btns}>
          <button className={`${styles.btn} `}> <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/48/ffffff/add--v1.png" alt="add--v1"/> Add New Contact </button>
          <button className={`${styles.btn} `}><img width="50" height="50" src="https://img.icons8.com/ios/48/ffffff/export.png" alt="export"/> Export </button>
        </div>
        <div className={`${styles.search} `}>
          <input type="text" id="fname" name="fname" placeholder='Search...'></input>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
        </div>
      </div>
    </div>
  )
}

export default Header