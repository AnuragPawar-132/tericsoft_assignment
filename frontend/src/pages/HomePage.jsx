import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/home.module.css"

const HomePage = () => {


  return (
    <div>
      <div className={styles.container} >
        <Link className={styles.link} to="/login" >Login</Link>
        <Link className={styles.link} to="/signup">Signup</Link>
      </div>
      <h2>Welcome to BMI calculator</h2>
    </div>
  )
}

export default HomePage