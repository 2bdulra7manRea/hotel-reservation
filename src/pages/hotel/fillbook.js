import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BookBar from "../../components/bookBar";

export default function FillBook() {
    
let params=useParams();
let bookroom=useSelector((data)=>{
return [...data.rooms].find((info)=>{
    return info.id==params.id;
})    
})

let [userInfo , setUserInfo]=useState({
    email:'',
    name:'',
    city:"",
    country:'',
    phoneNumber:''
})

function handleCahnge(v){
setUserInfo({
...userInfo,
[v.target.name]:v.target.value
})

}
function handleSubmit(v) {
console.log(userInfo)


    v.preventDefault();
}


return(<>
<div className='container-fluid'>
<div className='row header two'>
    <div className='overlay center_box'>
    <div className='big_title'>
         <div><img src='../../line1.png'></img></div>   
            <h1 className='bg_title'>Ticketing</h1>
          <div><img src='../../line3.png'></img></div>  
        </div>
    </div>
</div> 
<div className='container m'>
<div className='row'>
<div className='col-lg-5'>
    <BookBar Room={bookroom} Pay={userInfo} ></BookBar>
</div>
<div className='col-lg-7 center_box'> 
<div className='booking'>
 <div>
    <h1>Fill Your Data</h1>
</div>      
<form className='form_booking' onSubmit={handleSubmit} >
<input type='text'  required  value={userInfo.name} onChange={handleCahnge}       name='name'   placeholder='Full Name'></input>
<input type='email' required  value={userInfo.email} onChange={handleCahnge}      name='email'   placeholder='E-mail'></input>
<input type='text'  required  value={userInfo.phoneNumber} onChange={handleCahnge} name='phoneNumber'        placeholder='phone number'></input>
<input type='text'  required  value={userInfo.city} onChange={handleCahnge}      name='city'   placeholder='city'></input>
<input type='text'  required  value={userInfo.country} onChange={handleCahnge}    name='country'     placeholder='country'></input>
<input type='text'     placeholder='post code'></input>
<div>

</div>
</form>      

</div>
</div>
</div>


</div>





</div>
</>)
}