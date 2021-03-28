import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router"
import CardComponent from "../../components/card";
import logoOne from '../../line1.png'
import logotwo from '../../line3.png'
export default function Search() {
    
let params=useParams();

let searchitems= useSelector((data)=>{
return[...data.rooms].filter((itemdata)=>{
return  itemdata.buysdayes?![...itemdata.buysdayes].includes(params.in||params.out):itemdata
})
})


let history=useHistory();
let[timing, setTiming]=useState({in:params.in ,out:params.out , adult:params.adult})

function getTime(v) {
setTiming({
...timing,
[v.target.name]:v.target.value
})
}

function getsubmit(v) {
    
history.push('/item/search/'+timing.in+'/'+timing.out)  
  v.preventDefault();
}



return(<>
<div className='container-fluid back_search '>

<div className='row header five'>
    <div className='overlay center_box'>
    
        <div className='big_title'>
         <div><img src={logoOne}></img></div>   
            <h1 className='bg_title'>Find Your Room </h1>
          <div><img src={logotwo}></img></div>  
        </div>
        
    </div>
</div>
<div className="form_searching  center_box m">
                <form className='form_searchTwo' onSubmit={getsubmit}>
                    <div className='row'>
                <div className="col-lg-3 over">
                    <h5>check in</h5>
                  <input type='date' required onChange={getTime} value={timing.in} name='in'></input>
                </div>

                <div className="col-lg-3 over">
                <h5>check out</h5>
                <input type='date' required  onChange={getTime} value={timing.out} name='out'></input>
                 
                </div>
                <div className="col-lg-3 over">
                <h5>adults</h5>
                    <select required onChange={getTime} value={timing.adult}  name='adult' >
                        <option selected > Number of adults</option>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
                    </select>
                </div>

                <div className="col-lg-3 orange over center_box">
                  <button type='submit'  className="btn_over">  Book Now</button>
                </div>
               </div>
 </form>


              </div>
            


<div className='row'>




<div className='col-lg-12 center_box '>
<div className='search'>  
{searchitems&&searchitems.map((info)=>{
    return(
<CardComponent Room={info}></CardComponent>
);
})}


</div>  
</div>
</div>





</div>
</>)


}