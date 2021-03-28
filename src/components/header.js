import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import './com.css'
export default function HeaderComponent(params) {
    

    return(
<div className='stack'>    
    <Navbar className='nav_header' expand="lg">
  <h1 className='hotel'>GemHotel</h1>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className='nav-so'       to='/home'>Home</Link>        
      <Link className='nav-so'      to='/rooms'>Rooms</Link>      
      <Link className='nav-so'      to='/service'>Services</Link> 
      <Link className='nav-so'      to='/gallery'>Gallery</Link>  

{localStorage.getItem('authHotel')==='true'?<Link className='nav-so'to={`/profile/${localStorage.getItem('nameHotel')}`}>Account</Link>:<>
<Link className='nav-so'to='/register'>Register</Link> 
<Link className='nav-so'to='/login'>login</Link>  
</>

}


       
    </Nav>      
  </Navbar.Collapse>
</Navbar>
</div>    
    
    )
    
    }