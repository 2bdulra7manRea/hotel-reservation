import { useState } from "react"
import { useHistory } from "react-router";

export default function BookBar({Room ,Pay}) {
    
    let T=new Date();




let [infoReservations, setInfoReservations]=useState({
    in:'',
    out:'',
    night:0,
    adult:0,
    totalprice:Room.price
})



let history=useHistory();
function handlsubmit(v) {
 let orderNumber=Math.floor(Math.random()*1000);

if(Checkit()===false){
    alert('Please Check again the inputs')
}else{

let info={...Pay , ...infoReservations,orderNumber:orderNumber}
console.log(info)
history.push('/payment/'+orderNumber,info)

}
v.preventDefault()



}


function Checkit() {
    let flag=true
for(let x in Pay){
    if(Pay[x]===''){
        flag=false;
    }
}

for(let y in infoReservations){
    if(infoReservations[y]===''||infoReservations[y]===0){
        flag=false;
    }
}

return flag

}




function getValue(v) {
if(v.target.name==='night'){
    setInfoReservations({
        ...infoReservations,
        night:parseInt(v.target.value),
        totalprice:Room.price*parseInt(v.target.value),
        })
}else{
setInfoReservations({
...infoReservations,
[v.target.name]:v.target.value
})
}


}


return(<>

<div className='bookbar'>


<div className='bookbar_img'>
<img src={Room.img} alt='room' ></img>    
</div>

    
    <form onSubmit={handlsubmit}>
        <div>
        <h1>Check in</h1>
         <input type='date' min={`${T.getFullYear()}-0${T.getMonth()+1}-${T.getDate()}`}  onChange={getValue} value={infoReservations.in}  name='in' ></input>   
        </div>
        <div>
        <h1>Check out</h1>
         <input type='date' onChange={getValue}  value={infoReservations.out} name='out' ></input>   
        </div>
    
        <div>
        <h1>Adults</h1>
     <select required onChange={getValue} value={infoReservations.adult}  name='adult' >
                        <option defaultValue='1' > Number of adults</option>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
        </select>
        
        </div>


        <div>
        <h1>Night</h1>
     <select required onChange={getValue}   value={infoReservations.night}  name='night' >
                        <option  defaultValue='1' > Number of night</option>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
        </select>
        </div>
      
  <div className='book_btn'>
            <h2 className='book_price'>${infoReservations.totalprice}/Total Price</h2>
            <button type='submit' className='btn_pay' >Pay</button>
</div>

    </form>

    
</div>



</>)
}