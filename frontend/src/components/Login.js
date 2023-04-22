import styles from "./Login.module.css"

const Login = () => {
  const cover = "https://spofi.org/wp-content/uploads/2023/03/cropped-Fatherhood-logo-block-1-1-300x96.png"
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src ={cover}></img>
      </div>
      <div className={styles.right}>
        <div className={styles.login}>
          <div className={styles.inputContainer}>
            <input className={styles.input} placeholder = "Enter your email address"></input>
            <input className={styles.input} placeholder= "password"></input>
          </div>
          <div className={styles.actions}>
            <span className={styles.action}> <input type="checkbox"></input>Keep me login</span>
            <span className={styles.action}>Forgot password?</span>
          </div>
          <button className={styles.button}> Continue</button>
        </div>
      </div>
    </div >
  )
}

export default Login