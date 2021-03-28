import { useState, } from 'react'
import { useHistory } from 'react-router';
import './client.css'
export default function Register() {
let [values , setvalues]=useState({
name:'',
email:'',
password:''
})



let history=useHistory();
function handleSubmit (v) {

localStorage.setItem('authHotel','true')
localStorage.setItem('nameHotel',values.name)
alert('Welcome!!')
history.push('/profile/'+values.name);
 v.preventDefault()
}



function handleChange(v){



setvalues({
...values,
[v.target.name]:v.target.value
})

}

    return(<>
<div className='container-fluid'>
<div className='row header two'>
    <div className='overlay center_box'>
        <h1 className='title_auth'>Register</h1>
    </div>
</div> 

    <div className='center_box m' >
        <h1>Create Your Own Account</h1>
    </div>
<div className='row'>
<div className='col-lg-12  center_box m '>
    <form onSubmit={handleSubmit} className='register_form ' >
        <div>        
    <input type='text' required  onChange={handleChange}   value={values.name}  name='name'  placeholder='name'></input>        

        </div>
<div>
    <input type='email' required   onChange={handleChange}   value={values.email}   name="email"   placeholder='email' ></input>
   
</div>
<div>
<input type='password' required  onChange={handleChange}   value={values.password}   name='password' placeholder='password'></input>    

</div>
    <div  className='center_box'>
    <button   type='submit' >Register</button>    
    </div>
</form>     
</div>
</div>
</div>  
    </>)
};
