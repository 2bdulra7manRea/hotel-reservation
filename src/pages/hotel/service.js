import img1 from '../../img/8-2.jpg'
import img2 from '../../img/3-6.jpg'
import img3 from '../../img/7-3.jpg'
export default function Service(params) {
    

    return(<div className='container-fluid'>
    <div className='row header four '>
        <div className='overlay center_box'>
    
        <div className='big_title'>
         <div><img src='../../line1.png'></img></div>   
            <h1 className='bg_title'>Services </h1>
          <div><img src='../../line3.png'></img></div>  
        </div>        
        </div>
    </div>  



<div className='row'>
<div className='col-lg-12 center_box service_box'>


<div>
    <h1>We provide the most
Luxurious Services</h1>

<p>
Osana aims to take holistic living to new horizons within the local community. By facilitating wellness in all its forms, we promote a lifestyle that exists beyond its 
walls and hope to assist those pursuing a wholesome life in achieving it
</p>
</div>


</div>
</div>



<div className='row'>
    <div className='col-lg-6 Nm section_h center_box c wood'>
<div className='section_text' > 
<h1>Restaurant & Bar</h1>
<p>
Enjoy different exquisite flavours of tea and coffee in addition to a wide variety of snacks and sandwiches 
to go from Le Gourmet Shop located in the hotel lobby area.
</p>


<ul>
    <li><i class="far fa-caret-square-right"></i> Signature dishes</li>
    <li><i class="far fa-caret-square-right"></i> Dishes sampled and ingredients</li>
    <li> <i class="far fa-caret-square-right"></i>Other menu options that appealed</li>
    <li><i class="far fa-caret-square-right"></i>Special in-house cocktails, spirits</li>
</ul>



</div> 
</div>
<div className='col-lg-6 section_h Nm'>
<img src={img1} width='100%' height='100%' ></img>
</div>
</div>


<div className='row'>

<div className='col-lg-6 section_h Nm'>
<img src={img3} width='100%' height='100%' ></img>
</div>

    <div className='col-lg-6 Nm section_h center_box c wood'>
<div className='section_text' > 
<h1>Gym & Fitness</h1>
<p>
At Planet Fitness, we believe your fitness is essential™. Making your overall physical and mental wellness a priority will melt away stress, decrease anxiety, and increase your overall positive energy 
levels, and you’ll feel healthy and strong for the holidays and new year!
</p>

<ul>
    <li><i class="far fa-caret-square-right"></i> TAKE A VIRTUAL CLUB TOUR</li>
    <li><i class="far fa-caret-square-right"></i> STAY ACTIVE & HEALTHY</li>
    <li><i class="far fa-caret-square-right"></i>MASK UP AND KEEP MOVIN</li>
    <li><i class="far fa-caret-square-right"></i>STAY ACTIVE & HEALTHY</li>
</ul>




</div> 
</div>

</div>





<div className='row'>
    <div className='col-lg-6 Nm section_h center_box c wood'>
<div className='section_text' > 
<h1>Wellness Center</h1>
<p>
Aerial yoga incorporates hammocks into a traditional yoga class to bring you an added element of fun! The hammock offers a wonderful support system that means you can
 relax, release and bring your yoga practice to a whole new level
</p>
<ul>
    <li><i class="far fa-caret-square-right"></i> balance your energy, strength & flexibility</li>
    <li><i class="far fa-caret-square-right"></i> SPIRIT GUIDE CHANNELING⁠</li>
    <li> <i class="far fa-caret-square-right"></i>REIKI HEALING</li>
    <li><i class="far fa-caret-square-right"></i>functional diagnostic nutrition</li>
</ul>
</div> 
</div>
<div className='col-lg-6 section_h Nm'>
<img src={img2} width='100%' height='100%' ></img>
</div>
</div>


    </div>  )
    
    }