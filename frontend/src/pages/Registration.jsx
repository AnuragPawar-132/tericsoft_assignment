import axios from 'axios'
import React, { useState } from 'react';
import styles from "../styles/registration.module.css"
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleUserSignup = () =>{

        fetch(`https://stormy-caverns-19491.herokuapp.com/signup`,{
        method:"POST",
        body: JSON.stringify({
            username: name,
            email:email,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    alert("Signup successful")
    navigate("/login")
    }


  return (
    <div className={styles.container}>
        <h1>Signup</h1>
        <input className={styles.input_tag} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter name' />
        <input className={styles.input_tag} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter email' />
        <input className={styles.input_tag} onChange={(e)=>setPassword(e.target.value)} type="password"  placeholder='Enter password'/>
        <button className={styles.button} onClick={handleUserSignup} >Signup</button>
    </div>
  )
}

export default Registration