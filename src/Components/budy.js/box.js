import React from "react";
import photo1 from "../photo/truck.png";
import photo2 from "../photo/trust.jpg";
import photo3 from "../photo/advising.jpg";
import photo4 from "../photo/7day.png";


function box(){

    return(

<div className="box">


   <div className="box1">
      <img src={photo1} alt=""/>

 <div className="boxdiv">  <b> ارسال رایگان </b>   </div>

   </div>



   <div className="box2">
   <img src={photo2} alt=""/>

    <div className="boxdiv">  <b> ظمانت اصل بودن کالا </b>  </div>
   </div>





   <div className="box3">
   <img src={photo3} alt=""/>
   <div className="boxdiv"> <b>  مشاور تخصصی </b>  </div>

    </div>


    <div className="box4">
    <img src={photo4} alt=""/>
    <div className="boxdiv"> <b> ظمانت 7 روز بازگشت کالا  </b> </div>
    
    </div>



</div>

    )
}

export default box;