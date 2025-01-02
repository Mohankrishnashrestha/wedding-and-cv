import { useState } from "react";
import "./navigation.css";
function Navigation() {
    const [state,setState]=useState(false);
  return (
    <div className="header">
      <div className="logo">logo</div>

      <div className="menu" onClick={()=>{
        setState(!state); 
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
        <ul className={state?"open":""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      
    </div>
  );
}

export default Navigation;
