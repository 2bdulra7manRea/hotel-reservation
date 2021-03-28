
import { Link } from 'react-router-dom'

import './com.css'
export default function FlipBox({Room}) {
    



return(<>
<div className='flip'>
<div className='front'>
<img src={Room.img} width='100%' height='100%'  ></img>
</div>


<div className='back center_box'>
<div>
<Link to={`/details/${Room.id}`} >View Details</Link>
</div>

</div>

</div>








</>)
}