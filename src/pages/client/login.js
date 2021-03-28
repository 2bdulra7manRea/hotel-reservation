import { useState } from "react";
import { useHistory } from "react-router";
import './client.css'

export default function Login() {


    let [values , setvalues]=useState({
     
        email:'',
        password:''
        })
        
        

        let history=useHistory();
        function handleSubmit (v) {
        localStorage.setItem('authHotel','true')
        alert('Welcome!!')
        history.push('/profile/'+localStorage.getItem('nameHotel'));
        
         v.preventDefault()
        }
        
        
        
        function handleChange(v){        
        setvalues({
        ...values,
        [v.target.name]:v.target.value
        })
        
        }
        


return(

<div className='container-fluid'>
<div className='row header two'>
    <div className='overlay center_box'>
        <h1 className='title_auth'>Login</h1>
    </div>
</div> 

    <div className='center_box m' >
        <h1>Log in to your account</h1>
    </div>
<div className='row'>
<div className='col-lg-12  center_box m '>
    <form onSubmit={handleSubmit} className='register_form ' >

<div>
    <input type='email' required   onChange={handleChange}   value={values.email}   name="email"   placeholder='email' ></input>

</div>
<div>
<input type='password' required  onChange={handleChange}   value={values.password}   name='password' placeholder='password'></input>    

</div>
    <div  className='center_box'>
    <button   type='submit' >Login</button>    
    </div>
</form>     
</div>
</div>
</div>  


)
};
