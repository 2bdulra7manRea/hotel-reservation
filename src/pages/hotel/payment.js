import { useState } from "react"
import { SemipolarLoading } from 'react-loadingg';
export default function Payment(props) {
 let info={...props.location.state}   
let [coupen ,setcoupen]=useState('')
let [discount , setdiscount]=useState(info.totalprice)

function getCoupen() {
if(coupen==='petrologist'){
    let discount=Math.floor(Math.random()*100);
   alert('Congrats , you got '+(discount/100)*info.totalprice +'discount ')

   let newPrice=info.totalprice-((discount/100)*info.totalprice);
   setdiscount(newPrice)
    setcoupen('')
}
}
console.log(props.location.state)


    return(<div className='container-fluid'>
    <div className='row header'>
        <div className='overlay center_box'>
    
            <h1 className='bg_title'>Payment</h1>
        </div>
    </div> 
<div className='container '>

<div className='row m'>
    <div className='col-lg-12 m'>

<div className='payment center_box m'>


<table className='m'>
<tr>
<th>inforamtion</th>
<th>inforamtion</th>
</tr>
<tr>
    <td>Name</td>
    <td>{info.name}</td>
</tr>
<tr>
    <td>E-mail</td>
    <td>{info.email}</td>
</tr>
<tr>
    <td>phone number</td>
    <td>{info.phoneNumber}</td>
</tr>
<tr>
    <td>City</td>
    <td>{info.city}</td>
</tr>
<tr>
    <td>country</td>
    <td>{info.country}</td>
</tr>
<tr>
    <td>check in </td>
    <td>{info.in}</td>
</tr>
<tr>
    <td>Check out</td>
    <td>{info.out}</td>
</tr>
<tr>
    <td>number of night</td>
    <td>{info.night}</td>
</tr>
<tr>
    <td>number of adults</td>
    <td>{info.adult}</td>
</tr>
<tr>
    <td>Order Number</td>
    <td>{info.orderNumber}</td>
</tr>
<tr>
    <td>Total Price</td>
    <td>${discount} </td>
</tr>
</table>

</div>
  

      <div className='row m coupen ' >
          <div className='col-lg-6'>
    <input type='text' value={coupen} onChange={(v)=>setcoupen(v.target.value)}  placeholder='Enter Coupon'></input>
      <button onClick={getCoupen} >Apply</button> 
        <div>{coupen!==''&&<SemipolarLoading/>} </div>
          </div>




          <div className='col-lg-6 center_box'>
              <button>Make A request</button>
          </div>
     
  </div>
    </div>
</div>

</div>
    </div>  )
    
    }