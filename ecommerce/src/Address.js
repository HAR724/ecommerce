import React, { useState } from 'react'
import './address.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Address() {
  let navigate =useNavigate()
   let[fname,setfname]=useState()
   let[lname,setlname]=useState()
   let[email,setemail]=useState()
   let[phn,setphn]=useState()
   let[country,setcountry]=useState()
   let[city,setcity]=useState()
   let[stadd,setstadd]=useState()
   let[area,setarea]=useState()
   let[code,setcode]=useState()

   var submit=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:3000/address",{fname,lname,email,phn,country,city,stadd,area,code}).then(()=>{
        
         navigate('/savedaddress')
         window.location.reload()
       


      })
     
      
   }

   var save=()=>{
     
   }



  return (
   <>
   <div className={'mainadddiv'}>
   <div className={'divadd'}>
    <div className={'billdet'}><h3>Billing Details<br/><hr width="50%"/></h3></div>
   <form onSubmit={submit}>
  <div class="mb-3" className={'namediv'}>
    <label for="exampleInputEmail1" class="form-label">first Name</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setfname(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'lastdiv'}>
    <label for="exampleInputEmail2" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e)=>{setlname(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'emaildiv'}>
    <label for="exampleInputEmail3" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" onChange={(e)=>{setemail(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'phndiv'}>
    <label for="exampleInputEmail4" class="form-label">Phone Number</label>
    <input type="number"  class="form-control"  id="exampleInputEmail4" aria-describedby="emailHelp" onChange={(e)=>{setphn(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'countrydiv'}>
    <label for="exampleInputEmail5" class="form-label">Country</label>
    <input type="text" class="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" onChange={(e)=>{setcountry(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'citydiv'}>
    <label for="exampleInputEmail6" class="form-label">City</label>
    <input type="text" class="form-control" id="exampleInputEmail6" aria-describedby="emailHelp" onChange={(e)=>{setcity(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'adddiv'}>
    <label for="exampleInputEmail7" class="form-label">Street Address</label>
    <input type="text" class="form-control" id="exampleInputEmail7" aria-describedby="emailHelp" onChange={(e)=>{setstadd(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'areadiv'}>
    <label for="exampleInputEmail8" class="form-label">Area</label>
    <input type="text" class="form-control" id="exampleInputEmail8" aria-describedby="emailHelp"  onChange={(e)=>{setarea(e.target.value)}} required/>
 </div>
 <div class="mb-3" className={'postaldiv'}>
    <label for="exampleInputEmail8" class="form-label">Postal Code</label>
    <input type="text" class="form-control" id="exampleInputEmail8" aria-describedby="emailHelp" onChange={(e)=>{setcode(e.target.value)}} required />
 </div>
 <div className={'btnsavediv'}> <button class="btn btn-dark btnsave" type="submit" >Save</button></div>


  </form>

   </div>
   
   </div>

   </>
  )
}

export default Address