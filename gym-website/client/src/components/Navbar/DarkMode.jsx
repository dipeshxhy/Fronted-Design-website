import React, { useEffect, useState } from 'react'
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

const DarkMode = () => {
    const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")

    const element=document.documentElement
    useEffect(()=>{
        if(theme==="dark"){
element.classList.add("dark")
localStorage.setItem("theme","dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme","light")

        }
    })
  return (
    <div>
        {theme==="dark"?(<FiSun  onClick={()=>setTheme("light")} />):(
            <IoMoon  onClick={()=>setTheme("dark")} />

        )}
    </div>
  )
}

export default DarkMode