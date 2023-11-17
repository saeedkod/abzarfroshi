import React from "react";
import photo1 from "../photo/original-1-1024x1024.png";
import photo2 from "../photo/tell.png";
import photo3 from "../photo/instagram.png";
import photo4 from "../photo/whatsapp 1.png";
import {Link} from "react-router-dom" ;


function Footer(){


return(

<div className="allfooter">


     <div className="footerd1" >
        <h2> راهنمای مشتریان</h2>



        <h4>
         
       <Link to="/Components/budy.js/Ersal" style={{textDecoration :"none" , textDecorationColor:"white"  }} >

روش های ارسال کالا

        </Link>

        </h4>


        <h4>

        <Link to="/Components/budy.js/Bazgasht" style={{textDecoration :"none" , textDecorationColor:"white"  }} >

شرایت بازگشت

        </Link>
    

        </h4>


        <h4>

        <Link to="/Components/budy.js/Pardakht" style={{textDecoration :"none" , textDecorationColor:"white"  }} >

روش های پرداخت

        </Link>


        </h4>

        <h4>

        <Link to="/Components/budy.js/Ghavanin" style={{textDecoration :"none" , textDecorationColor:"white"  }} >

قوانین و مقررات

        </Link>

        </h4>

     </div>

   
     <div className="footerd2">
     
     <h2>اطلاعات ابزار مارکت</h2>


     <h4>

     <Link to="/Components/budy.js/Frosh" style={{textDecoration :"none" , textDecorationColor:"white"  }} >    فروش به شرکت ها   </Link>

     </h4>


     <h4>

     <Link to="/Components/budy.js/Hamkari" style={{textDecoration :"none" , textDecorationColor:"white"  }} >
همکاری در فروش

</Link>

     </h4>


     <h4>    

     <Link to="/Components/budy.js/Tamas " style={{textDecoration :"none" , textDecorationColor:"white"  }} >
       تماس با ما
       </Link>

     </h4>



     <h4>

     <Link to="/Components/budy.js/Darbareh " style={{textDecoration :"none" , textDecorationColor:"white"  }} >
      درباره ما
      </Link>

     </h4>



     </div>

     
     <div className="footerd3" > 
     <h2>نماد ها و مجوز ها</h2>
     <img src={photo1} alt=""/>
     </div>


     <div className="footerd4" >
     <h2>در شبکه های اجتماعی ما را دنبال کنید</h2>

<div  className="foterpic">

    
     <img src={photo3} alt=""/>
     <img src={photo4} alt=""/>

</div>


     </div>





</div>



);

}

export default Footer;