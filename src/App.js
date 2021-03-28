
import './App.css';
import React from'react'
import {Switch , BrowserRouter , Route} from 'react-router-dom'
import HeaderComponent from './components/header';
import Register from './pages/client/register';
import Login from './pages/client/login';
import FillBook from './pages/hotel/fillbook';
import PrivateRouter from './pages/client/privateRouter';
import profile from './pages/client/profile';
import Payment from './pages/hotel/payment';
import FooterCompoent from './components/footer';
import Home from './pages/hotel/Home.js';
function App() {


window.addEventListener('scroll',(v)=>{
if(window.scrollY<25){
  document.querySelector('.stack').style.backgroundColor='transparent';
}else{
document.querySelector('.stack').style.backgroundColor='rgb(29, 40, 41)';  
}
})



const RoomLazy=React.lazy(()=>import('./pages/hotel/rooms'))
const GalleryLazy=React.lazy(()=>import('./pages/hotel/gallery'))
const serviceLazy=React.lazy(()=>import('./pages/hotel/service'))
const SearchLazy=React.lazy(()=>import('./pages/hotel/SearchPage'))
const detailsLazy=React.lazy(()=>import('./pages/hotel/details'))
  return (<>
  <BrowserRouter>
    <div className="container-fluid">

<HeaderComponent></HeaderComponent>

<Switch>
<Route path='/' exact component={Home}></Route>
<Route path='/home' exact component={Home}></Route>
<Route path='/rooms' exact component={RoomLazy}></Route>
<Route path='/service' exact component={serviceLazy}></Route>
<Route path='/gallery' exact component={GalleryLazy}></Route>
<Route path='/payment/:id' exact component={Payment}></Route>
<Route path='/register' exact component={Register}></Route>
<Route path='/login' exact component={Login}></Route>
<Route path='/item/search/:in/:out/:adult' exact component={SearchLazy}></Route>
<Route path='/details/:id' exact component={detailsLazy}></Route>
<Route path='/book/:id' exact component={FillBook}></Route>
<PrivateRouter  path='/profile/:id'   Component={profile} ></PrivateRouter>
</Switch>


<FooterCompoent></FooterCompoent>
    </div>

</BrowserRouter>    
    </>
  );
}

export default App;
