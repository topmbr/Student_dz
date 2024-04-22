// import logo from 'vite.svg'
// const now = new Date();
import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(()=> setNow(new Date()), 1000)
      return (
        <header>
            <img src ={'vite.svg'} alt=""/>
          <h3>Student</h3>
          <span> time { now.toLocaleTimeString()} </span>
          {/* <span> time { "hello".toUpperCase()} </span>  */}
        </header>        
    )
  }