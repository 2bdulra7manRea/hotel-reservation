import "./hotel.css";
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react";
import { useHistory } from "react-router";
import img30 from '../../img/portf13.jpg';
import img40 from '../../img/portf14.jpg';
import img50 from '../../img/portf17.jpg';
import img60 from '../../img/portf16.jpg';
import img1 from '../../img/8-2.jpg';
export default function Home() {


let history=useHistory();

let [indexPhoto , setIndexPhoto]=useState(2)
function Movephoto(v) {
console.log(v.target.value)
setIndexPhoto(+v.target.value)
}


let[timing, setTiming]=useState({in:'' ,out:'' , adult:'0'})


function getTime(v) {
  
console.log(v)
setTiming({
...timing,
[v.target.name]:v.target.value
})
}

function getsubmit(v) {
history.push('/item/search/'+timing.in+'/'+timing.out+'/'+timing.adult)  
  v.preventDefault();
}





let photos=[
img30,
img40,
img50,
img60,
];
let paragraph=[
{title:'Business Room' ,price:8343, brief:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitatio aliquip ex ea commodo consequat. cillum'},
{title:'Luxury Room' ,price:1266, brief:'many room uoi cna byu one of them ot, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis'},
{title:'Executive Suite' ,price:4405, brief:'htat is ver t fjgoo to bty tthis gkeindn go hpto i like ti so mauchndsse cillum'},
{title:'Deluxe Room' ,price:7330, brief:'Lorem ipsum dolor sit amet,which one oyu can buy t=it in the futer t consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
]

    
  return (
    <>
      <div className="container-fluid">
        <div className="row header">
          <div className="overlay center_box">
            <div className="col-lg-8 m">
              <div className="row center_box c m">
                <div><img src='../../line1.png'></img></div>
                <h1 className="bg_title">Gem Hotel</h1>
                <p style={{color:'white' , fontSize:'1rem'}} >Luxury Resort & Spa</p>
                <div><img src='../../line3.png'></img></div>
              </div>

              <div className="row">
                <div className='col-lg-12 center_box'>
                <form className='row forming' onSubmit={getsubmit}>
                 
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
                        <option defaultValue='1' > Number of adults</option>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
                    </select>
                </div>
                <div className="col-lg-3 lightColor center_box">
                  <button type='submit' className="btn_over">Make reservation</button>
                </div>

                
                </form>
                 </div>
                  </div>
             
            </div>
          </div>
        </div>
      
      
  <div className='row'>
<div className='col-lg-4 section_h Nm'>
<img src={img30} width='100%' height='100%' alt='room' ></img>
</div>

<div className='col-lg-4 Nm section_h center_box c wood'>
<div className='section_text' > 
<h1>Great Services</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna.
 Ut enim ad mini veniam, quis nostrud exercitation
</p>
<a href=''  >Learn more</a>
</div> 
</div>



<div className='col-lg-4 section_h Nm'>
<img src={img40} width='100%' height='100%' ></img>
</div>
</div>
      

<div className='row'>
<div className='col-lg-4 Nm section_h center_box c wood'>
<div className='section_text' > 
<h1>Best Experience</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna.
 Ut enim ad mini veniam, quis nostrud exercitation
</p>
<a href=''  >Learn more</a>
</div> 
</div>




<div className='col-lg-4 section_h Nm'>
<img src={img1} width='100%' height='100%' alt='room'></img>
</div>

<div className='col-lg-4 Nm section_h center_box c wood'>
<div className='section_text' > 
<h1>Professional Staff</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna.
 Ut enim ad mini veniam, quis nostrud exercitation
</p>
<a href='' >Learn more</a>
</div> 
</div>
</div>

<div className='row wood'>
<div className='col-lg-6 section_h '>
<img src={photos[indexPhoto]} width='100%' height='100%' alt='photo'  ></img>
</div>
<div className='col-lg-6 section_h center_box'>

<div>  
<input type='radio' onChange={Movephoto} id='r1' value='1' name='photo'></input>
<input type='radio'  onChange={Movephoto}id='r2'  value='2' name='photo'></input>
<input type='radio' onChange={Movephoto} id='r3' value='3' name='photo'></input>
<input type='radio'  onChange={Movephoto}id='r4' value='0' name='photo'></input>
</div>

<div className='section_text' > 
<h1>{paragraph[indexPhoto].title}</h1>
<div><img src='../../line3.png'></img></div>
<h4>${paragraph[indexPhoto].price}</h4>
<p>
{paragraph[indexPhoto].brief}
</p>


<div className='label_radio'>
  <label htmlFor='r1'></label>
  <label htmlFor='r2'></label>
  <label htmlFor='r3'></label>
  <label htmlFor='r4'></label>
</div>
</div> 
</div>
</div>



<div className='row fav_section'>

<div className='col-lg-12 center_box'>
  <div className='title_fav_section'>
    <h1>Favorite Rooms</h1>
    <div><img src='../../line3.png'></img></div>
  </div>
</div>
<div className='col-lg-12 m'>
  <Carousel>
 
  <Carousel.Item>
 <div className='bar_box'>      
<div className='bar_photos'>   
<div className='bar_photos_item'>
<img src={img30} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img40} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img1} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img30} alt='room'></img>
</div>
</div> 
</div>  
  </Carousel.Item>
  <Carousel.Item>
 <div className='bar_box'>      
<div className='bar_photos'>   
<div className='bar_photos_item'>
<img src={img30} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img40} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img1} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img30} alt='room'></img>
</div>
</div> 
</div>  
  </Carousel.Item>

  <Carousel.Item>
 <div className='bar_box'>      
<div className='bar_photos'>   
<div className='bar_photos_item'>
<img src={img30} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img40} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img1} alt='room'></img>
</div>
<div className='bar_photos_item'>
<img src={img30} alt='room'></img>
</div>
</div> 
</div>  
  </Carousel.Item>

</Carousel>


</div>
</div>

<div className='row'>
  <div className='col-lg-12 offers'>
<div className='overlay center_box '>

<table>
  <thead>
  <tr>
    <th>DIAMOND</th>
    <th>GOLD</th>
    <th>SILVER</th>
  </tr>
 </thead>
 <tbody>
<tr>
  <td>Flight Ticket</td>
  <td>Flight Ticket</td>
  <td>Flight Ticket</td>
</tr>
<tr>
  <td>Restaurant ( Lunch / Dinner )</td>
  <td>Restaurant ( Lunch / Dinner )</td>
  <td>Restaurant ( Lunch / Dinner )</td>
</tr>
<tr>
  <td>Music Concert</td>
  <td>Music Concert</td>
  <td>Music Concert</td>
</tr>
<tr>
  <td>Airport Pick-upt</td>
  <td>Airport Pick-upt</td>
  <td>Airport Pick-upt</td>
</tr>
</tbody>
</table>



</div>


  </div>
</div>







      </div>
    </>
  );
}
