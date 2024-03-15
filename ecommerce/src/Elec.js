import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from 'react';
function Elec(props) {
    let[datas,setdata]=useState()
    let [num,setnum]=useState(0)
    const { user, isAuthenticated, isLoading,logout } = useAuth0();
    
  useEffect(()=>{
    var a= axios.get(`https://fakestoreapi.com/products/category/${props.category}`)
    a.then((b)=>{
   setdata(b.data)

   })
  


 })

console.log(datas)

var click=(title,price,rating,quan,image)=>{
  if(quan>0 && isAuthenticated){
  var total=price*quan
  axios.post("http://localhost:3000/data",{title,price,rating,quan,image,total}).then(()=>{
    window.location.reload()
  })
  }else{
    alert("you can not select quantity as 0 And you have to log in yourself before adding items in your bag")
  }
}

var sum=()=>{
if(num===0 ||( num>=0 && num<10)){
setnum(num=num+1)
}else{
  alert("you can not accessed by 10")
}
}
var min=()=>{
if(num<=0){
  alert("you can not decreased by 0")
    }else{
     
      setnum(num=num-1)
    }
}



  return (
    <>
    <div className={'maindiv'}>
    <div className={"div1"}>
      <div className={'category'}><h1>Category</h1></div>
      <div className={'div11'}>
        <ul className={'uldiv1'}>
        <li className={'lidiv'}><Link to="/"><button className={'btndiv'}>All</button></Link></li>
          <li className={'lidiv'}><Link to="/mens"><button className={'btndiv'}>Mens clothing</button></Link></li>
          <li className={'lidiv'}><Link to="/women"><button className={'btndiv'}>Women clothing</button></Link></li>
          <li className={'lidiv'}><Link to="/jewellery"><button className={'btndiv'}>Jewellery</button></Link></li>
          <li className={'lidiv'}><Link to="/electronics"><button className={'btndiv'}>Electronics</button></Link></li>
        </ul>

      </div>
      
    </div>
    {datas? <div className={'div2'}>
      {
     
        datas.map((item)=>{
          return(
            <div class="card cardwidth">
            
            <img src={item.image} class="card-img-top " alt="..."  height="150px" width="10%" />
            
           
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text"><b>Rating:</b>{item.rating.rate}</p>
              <p class="card-text"><b>Price:</b>{item.price}</p>
              <button type="button" class="btn btn-primary addcart" onClick={()=>{click(item.title,item.price,item.rating.rate,num,item.image)}}>Add to cart</button>
              <button type="button" class="btn btn-dark btnplus" onClick={sum}>+</button>
               <form> <input type="number" class="form-control inputfrm" maxLength="1" value={num}/></form>
               <button type="button" class="btn btn-dark btnmin" onClick={min}>-</button>
              <p class="card-text des">{item.description}</p>
             
            </div>
            
        
          </div>

          )
        }
        
        )
      }
    
    
    
    
    </div>:<p>no data</p>}
  
</div>
    
    </>
  )
}

export default Elec