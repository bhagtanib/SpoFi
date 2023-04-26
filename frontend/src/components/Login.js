import styles from "./Login.module.css"
import { useEffect, useState } from 'react';
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPage, setShowPage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password
    }
    axios.post('http://localhost:3001/api/users', params).then((res) => { alert(res.data.message) }, (err) => {alert(err.message)}).catch((err) => { alert(err.response.data.message) })
  }
  const cover = "https://spofi.org/wp-content/uploads/2023/03/cropped-Fatherhood-logo-block-1-1-300x96.png"
  useEffect(() => {
    setTimeout(() => {
      setShowPage(true)
    }, 3000)
  }, [])


  return (
    <>
      {!showPage ? <div className={styles.loadingContainer}> <>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </> </div> :
        <div className={styles.container}>
          <div className={styles.left}>
            <img src={cover}></img>
          </div>
          <div className={styles.right}>
            <div className={styles.login}>
              <div className={styles.inputContainer}>
                <input className={styles.input} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"></input>
                <input className={styles.input} onChange={e => setPassword(e.target.value)} placeholder="password"></input>
              </div>
              <div className={styles.actions}>
                <span className={styles.action}> <input type="checkbox"></input>Keep me login</span>
                <span className={styles.action}>Forgot password?</span>
              </div>
              <button className={styles.button} onClick={handleSubmit}> Continue</button>
            </div>
          </div>
        </div >}
    </>
  )
}
const PlaceHolder = () => {
  <div className={styles.loadingContainer}>
    Loading
  </div>
}
export default Login