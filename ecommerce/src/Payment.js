import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './payment.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Payment() {
 let navigate =useNavigate()
    let {id}=useParams()
   let[data,setdata] =useState()
   let [title,settitle]=useState()
   let [img,setimg]=useState()
   
   useEffect(()=>{
    var a=axios.get("http://localhost:3000/data").then((b)=>{
      setdata(b.data)
    })
   })

   var subtot=0
   if(data){
    for(var i=0;i<data.length;i++){
      subtot=subtot+data[i].total
    }

   }

   var obj=new Date();
   var date=obj.getDate()
   var month=obj.getMonth()
   var year=obj.getFullYear()

   var submit=()=>{
    
  
    var store=data
    if(store){
      for(var i=0;i<store.length;i++){
    var title=store[i].title
    var image=store[i].image
    var price=store[i].price
    var  quan=store[i].quan
    var rating=store[i].rating
    console.log(title)
    axios.post("http://localhost:3000/myorder",{title,image,price,quan,date,month,year,rating}).then(()=>{
      
    })}
    navigate("/order")
  }
}

   
  


  return (
    <>
   <div className={'mainpage'}>
    <div className={'centerdiv'}>
      <div></div>
      <div className={'sumdiv'}><h1>Summary And Payments<hr width="60%" color='black' size="5"/></h1></div>
      <div><table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  {
    data?<tbody>
      {data.map((item)=>{
        return(
          <tr className={'trrow'}>
          <td><div  ><img src={item.image} alt='...' height="100px" width="100px"/></div><div className={'titlediv'}><b>{item.title}</b></div><div className={'ratediv'}>{item.rating}</div></td>
          <td>{item.price}</td>
          <td>{item.quan}</td>
          <td>{item.total}</td>
        </tr>
        )


      })}
       <tr><td colSpan="4"><div className={'subdiv'}><h4>Subtotal</h4></div> <div className={'totaldiv'}>{subtot}</div></td></tr>
    </tbody>:<p>no data</p>
  }
  
  
  </table>
  <div className={'paymentoption'}><h3>Payment Option<hr width="35%" size="5"color="black"/></h3></div>
  <form onSubmit={submit}>
    <div className={'cashdiv'}>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="cash" required/>
  <label class="form-check-label" for="flexRadioDefault1">
    Cash on delivery (cod)
  </label>
</div>
 
</div>

<div class="col-12 placeorder">
    <button class="btn btn-dark" type="submit">Place Order</button>
  </div>

  </form>


  </div>


      
    </div>
   </div>
    
    </>
  )
}

export default Payment