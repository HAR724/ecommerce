import React, { useEffect, useState } from 'react'
import './savedaddress.css'
import axios from 'axios'
import { useActionData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

function Savedaddress() {
 let navigate =useNavigate()
   let[data,setdata] =useState()
   let[values,setvalues]=useState()
    useEffect(()=>{
        var a=axios.get("http://localhost:3000/address")
        a.then((b)=>{
            setdata(b.data)


        })
    })
    console.log(values)
  var submit=(e)=>{
    e.preventDefault()
    console.log(values)

  }

  var remove=(erase)=>{
    axios.delete("http://localhost:3000/address"+"/"+erase).then(()=>{
      window.location.reload()
    })

  }
  var goto=(pro)=>{
    if(pro){
      navigate("/payment choice"+"/"+pro)
    }else{
      alert("please choose one option atleast")
    }

  }
    


  return (
    <>
    <div className={'mainsavedadd'}>
        <div className={'savedadddiv'}>
        <form onSubmit={submit} >
            {data?<div>{data.map((item)=>{
                return(
                    
                    <div class="card">
                     <div class="card-body">
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={item.id} onChange={(e)=>{setvalues(e.target.value)}} required />
                      <label class="form-check-label" for="flexRadioDefault1">
                      <div><p><b>{item.fname} {item.lname}</b></p><p>{item.email}</p><p>{item.phn}</p><p>{item.stadd} {item.area} {item.city} {item.code}</p><p>{item.country}</p></div>
                      </label>
                      <div><button type="button" class="btn btncancel " onClick={()=>{remove(item.id)}}><MdOutlineCancel /></button></div>
                      </div>
                     </div>
                    </div>
                   
                   
                )

            })} </div>:<div>no data</div>}
             <div class="col-12">
                     <button class="btn btn-dark btnnext" type="submit" onClick={()=>{goto(values)}} >Next</button>
                    </div>
            </form>

            <div className={'icondiv'}>
            <Link to="/address" ><button type="button" class="btn btnadd "><IoIosAddCircle /></button></Link>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Savedaddress