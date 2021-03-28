import { useSelector } from "react-redux"
import FlipBox from "../../components/flipCard";

export default function Gallery(params) {
   
    
let item=useSelector((data)=>{ 
return data.rooms;
})





    return(

<div className='container-fluid'>
<div className='row header three'>
    <div className='overlay center_box'>

    <div className='big_title'>
         <div><img src='../../line1.png'></img></div>   
            <h1 className='bg_title'>Gallery</h1>
          <div><img src='../../line3.png'></img></div>  
        </div>
    </div>
</div>
<div className='container'>


<div className='row'>
    <div className='col-lg-12 gallery'>
{item&&item.map((rooms,index)=>{
return(
<FlipBox Room={rooms} key={index} ></FlipBox>
);

})



}
    </div>
</div>




</div>
</div>  

    )
    
    }