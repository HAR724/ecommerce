import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './cart.css'
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
function Cart() {
 let[datas,setdatas] =useState()
 let[adsdata,setadsdata]=useState()

  useEffect(()=>{
    var a=axios.get("http://localhost:3000/data/")
    a.then((b)=>{
     
   setdatas(b.data)

    });

    var c=axios.get("http://localhost:3000/address")
    c.then((d)=>{
      setadsdata(d.data)

    })

  })
 
  var z=datas
  if(z){
  if(z.length>=1){
  var y=z.length}}
  console.log(y)

  if(adsdata){
    if(adsdata.length>=1){
      var u=adsdata.length
    }
  }



  var subtot=0
if(datas){
for(var i=0;i<datas.length;i++){
  subtot=subtot+datas[i].total

}
}
console.log(subtot)
var del=(rem)=>{
  axios.delete("http://localhost:3000/data"+"/"+rem).then(()=>{

  })

}
  

 
  return (
    <>
    <div className={'bag'}><h1>Your Shopping Bag-{datas?<h1 className={'dataslen'}>{datas.length}</h1>:<h1>0</h1>} <h1 className={'lendata'}>item</h1></h1><hr width="48%" /></div>
    <div className={'tablediv'}>
    <table class="table tbl">
  <thead>
    <tr>
      <th scope="col">Product in bag</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  {
    datas?<tbody>
        {datas.map((item)=>{
        return(
          <tr>
          <td scope="row" width="1100px"><div className={'productdiv'}><button type="button" class="btn  btncan"  onClick={()=>{del(item.id)}}><MdOutlineCancel /></button><img src={item.image} alt='...' height="100px" width="100px"/><p className={'paraname'}>{item.title}<br/><br/><p className={'parado'}>{item.rating}</p></p></div></td>
          <td>{item.price}</td>
          <td>{item.quan}</td>
          <td>{item.total}</td>
          {
          
          }
        </tr>
        )
      })
   
      }
    </tbody>:<p>no data</p>
  }
  
  <tr>
      <td scope="col" ><h3 className={'subtotaldivv'}>SUBTOTAL</h3></td>
      <td colSpan="3"  className={'subtotaldiv'}>{subtot}</td>
     
    </tr>
  
{y?<div>
    {u?
    <Link to="/savedaddress"><button type="button" class="btn btn-dark btncheck">Checkout</button></Link>:<Link to="/address"><button type="button" class="btn btn-dark btncheck">Checkout</button></Link>}</div>:<h1 className={'ydiv'}>Add Some items</h1>}
  </table>
    </div>

    



    </>
  )
}

export default Cart