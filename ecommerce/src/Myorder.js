import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './myorder.css'

function Myorder() {
 let [data,setdata] =useState()

  useEffect(()=>{
    var a=axios.get("http://localhost:3000/myorder")
    a.then((b)=>{
      setdata(b.data)

    })
   
        
      }
  )
  var click=(remove)=>{
    var alt=window.confirm("are you sure to cancel this order")
    if(alt===true){
      axios.delete("http://localhost:3000/myorder/"+remove).then(()=>{
        window.location.reload()
      })
    }

  }

  




  return (
    <>
  <div className={'maindivmy'}>
    <div className={'centerdivmy'}>
      {
        data?<div>
        {data.map((item)=>{
          return(
            <div class="card carddiv">
  <div class="card-body carddivv">
    <div>ordered Date:-{item.date}/{item.month}/{item.year}</div>
    <div className={'imagediv'}><img src={item.image} height="100px" width="100px" alt='...'/></div>
    <div className={'titlediv'}><p><b>{item.title}</b></p></div>
    <div className={'ratingdiv'}>{item.rating}</div>
    <div className={'qunadiv'}><p><b>Quantity</b><br/><p className={'realquan'}>{item.quan}</p></p></div>
    <div className={'pricediv'}><p><b>Price</b><br/><p  className={'realprice'}>{item.price}</p></p></div>
    <div className={'btncancels'}><button type="button" class="btn btn-dark" onClick={()=>{click(item.id)}}>Cancel Order</button></div>

  </div>
</div>

          )
        })}</div>:<p>no data</p>
      }

    </div>

  </div>
   
    </>
  )
}

export default Myorder