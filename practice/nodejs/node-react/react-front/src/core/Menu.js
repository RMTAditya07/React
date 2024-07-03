import React,{useState} from "react";
import {Link,withRouter} from 'react-router-dom'
import { isAuthenticated,signout } from "../auth";


const isActive=(history,path)=>{
  if(history.location.pathname===path)return {color:"#8d29d7"}
    else return {color:"#131733"}
}



const Menu=({history})=>(
    
    <div>
      <ul className="nav nav-tabs bg-info bg-gradient text-dark">

        <li className="nav-item">
          <Link className="nav-link" style={isActive(history,"/")} to="/">Home</Link>
        </li>

        {!isAuthenticated() &&(
        <>
            <li className="nav-item">
              <Link className="nav-link" style={isActive(history,"/signup")} to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" style={isActive(history,"/signin")} to="/signin">Signin</Link>
            </li>
        </>
        )}
       
        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <a className="nav-link" 
                style={(isActive(history,"/signup"),{cursor:
                "pointer",color:"#261135"})
                } 
                onClick={()=>signout(()=>history.push('/'))}
              >
                Signout
              </a>
            </li>
            
            <li className="nav-item">
               <Link className="nav-link" to={`/user/${isAuthenticated().user._id}`} style={{color:"#261135"}}>
                  {`${isAuthenticated().user.name}'s profile`}
                </Link>
            </li>
          </>
        )}

      </ul>
    </div>
)

export default withRouter(Menu)