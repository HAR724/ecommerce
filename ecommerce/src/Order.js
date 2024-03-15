import React from 'react'
import './order.css'
import { useNavigate } from 'react-router-dom'
function Order() {
   let navigate =useNavigate()

    var continoue=()=>{
        navigate("/")

    }

    var myorder=()=>{
        navigate('/myorder')
    }

  return (
 <>
<div className={'maindivorder'}>
    <div className={'imgdone'}><img src="images/tickdone.png" alt='...'/></div>
    <div className={'thankudiv'}><h2>Thank u for ordering!</h2></div>
    <div className={'divbtn'}><button type="button" class="btn btn-dark btnview" onClick={myorder}>View Order</button><button type="button" class="btn btn-dark btncon" onClick={continoue}>Continoue Shopping</button></div>

</div>
 
 </>
  )
}

export default Order