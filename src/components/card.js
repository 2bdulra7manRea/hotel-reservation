import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import{DOILIKE} from '../store/action'
export default function CardComponent({Room}) {
    
let [like , dislike]=useState(false)
let dispach=useDispatch();
function Ilike() {

    if(like===true){
        dislike(false)
        let o=Room.likes-1
        dispach(DOILIKE(o,Room.id))
    }else{
        let o=Room.likes+1
        dispach(DOILIKE(o,Room.id))
        dislike(true)
    }
}


    return(<>
<div className='card_room'>
<div className='room_picture'>
    <img src={Room.img} alt='room'></img>
    <div className='picture_overlay center_box'>
<div className='over_pic' >
    <span>
        <Link to={`/details/${Room.id}`} >View Details</Link>
    </span>
</div>
    </div>
</div>
<div className='room_body'> 
<h3>{Room.typeRoom}</h3>
<p> a wounderfull room</p>
<div className='center_box icon ' >
<i onClick={Ilike} style={{color:like===true?'red':'burlywood'}} className="fas fa-heart"></i>
<span>{Room.likes}</span>
</div>
</div>

    </div>
    </>)
    }