import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import BookBar from "../../components/bookBar"
import CardComponent from "../../components/card"

export default function Details() {
    let Params=useParams()
let T=new Date();
console.log(T.getTimezoneOffset())
let roomBooks=[];
let detail=useSelector((data)=>{

roomBooks=[...data.rooms]

return [...data.rooms].find((value)=>{
return value.id===Params.id
})
})


let RoomRelated=useSelector((rom)=>{
    return rom.rooms
})


let [infoBook,setInfoBook]=useState({in:'',out:'',adult:0})

function getvalue(v) {
setInfoBook({
...infoBook,
[v.target.name]:v.target.value
})
}

let history=useHistory();
let [avilable , setavilable]=useState(true)
function submitting(v){
    v.preventDefault();
if(detail.hasOwnProperty('buysdayes')){
let result=[...detail.buysdayes].includes(infoBook.in||infoBook.out);
if(result===true){

setavilable(false)
}else{
history.push('/book/'+detail.id)
}
}else{
history.push('/book/'+detail.id) 
}




}

    return(<>
    <div className='container-fluid'>
    <div className='row header five'>
    <div className='overlay center_box'>
    
        <div className='big_title'>
         <div><img src='../../line1.png'></img></div>   
            <h1 className='bg_title'>{detail.typeRoom} </h1>
          <div><img src='../../line3.png'></img></div>  
        </div>
        
    </div>
</div>
<div className='container-fluid background_details'>

<div className='row '>

<div className='col-lg-8'>
<div className='detail_img m'>
    <img src={detail.img}></img>
</div>
<div className='detail_info row m'>
<div className='info_box col-md-3'>
    <span>
    <i class="far fa-user"></i>
    </span>
    <p>{detail.guest} Guest</p>
</div>
<div className='info_box col-md-3'>
    <span>
    <i class="fas fa-th"></i>
    </span>
    <p>{detail.distance} m</p>
</div>
<div className='info_box col-md-3'>
    <span>
    <i class="fas fa-bed"></i>
    </span>
    <p>${detail.price}/per Night</p>
</div>
<div className='info_box col-md-3'>
    <span>
    <i class="far fa-heart"></i>
    </span>
    <p>{detail.likes} reviews </p>
</div>


</div>

<div className='detail_brief m'>
    <p>{detail.describtion}</p>
</div>

<div className='detail_service m'>
    <h1>Service:</h1>
<ul>
{
    detail.service.map((serve)=>{
        return(
            <li>{serve}</li>
        )

    })
}

</ul>

</div>


</div>
<div className='col-lg-4 side'>
<div className='bookbar'>    


{avilable===false?<div class="alert alert-warning" role="alert">
 Sorry, this room is not available in this time 
 you can choose before <span style={{color:'red'}} >{detail.buysdayes[0]}</span><br></br>
  or after <span style={{color:'red'}}>{detail.buysdayes[detail.buysdayes.length-1]}</span> 
</div>:''}
    <form onSubmit={submitting} >
        <div>
        <h1>Check in</h1>
         <input type='date' required  min={`${T.getFullYear()}-0${T.getMonth()+1}-${T.getDate()}`} onChange={getvalue}  value={infoBook.in}  name='in' ></input>   
        </div>
        <div>
        <h1>Check out</h1>
         <input type='date' required onChange={getvalue} value={infoBook.out}  name='out' ></input>   
        </div>
    
        <div>
        <h1>Adults</h1>
     <select required  onChange={getvalue} value={infoBook.adult}  name='adult' >
                        <option selected > Number of adults</option>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
        </select>
        </div>   
         <div className='book_btn'>
          <button >Book Now</button>
</div>

    </form>

 
    
</div>




    
</div>
</div>




</div>



<div className='row m'>
    <div className='col-lg-12 center_box m'>
        <div className='related'>
    <h1 className='related_title'>Related Rooms</h1>   
    <div><img src='../../line3.png'></img></div>
    </div>
    </div>
    
<div className='col-lg-12 rooms'>
{RoomRelated&&RoomRelated.slice(3,9).map((related)=>{

return(
<CardComponent Room={related}></CardComponent>
)

})}

</div>
</div>





    </div>

    </>)
    
    }