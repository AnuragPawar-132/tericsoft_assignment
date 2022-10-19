import React from 'react'
import { useState } from 'react';
import styles from "../styles/user.module.css"

const UserBmi = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [display, setDisplay] = useState("none")
  const [bmi, setbmi] = useState("")

  const calculateBmi = ()=>{
    setDisplay("none")
    let ans = ((weight)/(height/3.281)**2).toFixed(2)
    setbmi(ans)
    console.log(ans)
    setDisplay("block")
  }
  return (
    <div>
      <h2>Calculate BMI here..</h2>
      <div className={styles.container}>
        <input className={styles.input_tag} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter height in feet'/>
        <input className={styles.input_tag} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter weight in kgs' />
        <button className={styles.button} onClick={calculateBmi} >Calculate BMI</button>
      </div>
      <div ><h2>Your BMI is {bmi} </h2></div>
    </div>
  )
}

export default UserBmi