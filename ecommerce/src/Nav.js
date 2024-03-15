import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
import { IoMdCart } from "react-icons/io";
import { ContextData } from './Home';
import axios from 'axios';
import { BsBucketFill } from "react-icons/bs";

function Nav() {
  let [data,setdata]=useState()
    const { loginWithRedirect ,isAuthenticated,user,logout} = useAuth0();
    useEffect(()=>{
      var a=axios.get("http://localhost:3000/data")
      a.then((b)=>{
        setdata(b.data)


      })
    })
   



  return (
  <>
  
    <nav class="navbar navbar-expand-lg  navmain">
  <div class="container-fluid">
    <img src="images/ecommercelogo1.png" className={'imglogo'} height="100px" width="100px" alt='..'/>
{isAuthenticated ?(<div className={'username'}> <h2>Welcome</h2><p>{user.name}</p></div>):<h2 className={'username'}>Welcome To <br/> E-commerce</h2>}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse uldiv" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item linav">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item linav">
        <Link class="nav-link active" aria-current="page" to="/cart" title="cart"><IoMdCart /></Link>
        </li>
      
       {data?<p className={'itemsbag'}>{data.length}</p>:<p className={'itemsbag'}>0</p>} 
       <li class="nav-item linav limyorder">
        <Link class="nav-link active" aria-current="page" to="/myorder" title="my order"><BsBucketFill /></Link>
        </li>
        {isAuthenticated?  <li class="nav-item linav libtn">
        <button type="button" class="btn btn-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </li>:<li class="nav-item linav libtn">
        <button type="button" class="btn btn-info" onClick={() => loginWithRedirect()}>Log In</button>
        </li>}
        
        
      </ul>
      
    </div>
  </div>
</nav>
  
  </>
  )
}

export default Nav