import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css"

const Login = () => {

    const [user, setUser] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const fetchUserDetails = ()=>{
        axios.get("https://stormy-caverns-19491.herokuapp.com/login")
        .then((res)=>console.log(res.token))
        .catch((err)=>console.log(err))
    }

    const handleUserLogin = () =>{
            if(email!=="" && password!=="")
            {
                return navigate("/user")
            }
            else
            {
                alert("Invalid Credential")
            }
    }

    useEffect(()=>{
        fetchUserDetails()
    }, [])
    console.log(email, password)

  return (
    <div className={styles.container} >
        <h1>Login</h1>
        <input className={styles.input_tag}  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter email' />
        <input className={styles.input_tag}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password' />
        <button className={styles.button}  onClick={handleUserLogin} >Login</button>
        <Link style={{color:"black"}} to="/signup" >Not having an account, Signup here..</Link>
    </div>
  )
}

export default Login