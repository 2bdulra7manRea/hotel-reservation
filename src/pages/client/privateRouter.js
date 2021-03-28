
import { Redirect, Route} from 'react-router-dom'
export default function PrivateRouter({Component,...rest}) {
    

return(

<Route {...rest}  render={()=>{
return(
localStorage.getItem('authHotel')==='true'?<Component></Component>:<Redirect to='/login'></Redirect>
);
}} ></Route>

)



};
