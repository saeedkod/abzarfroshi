import React from "react";
import photo1 from "../budy.js/Photohome/khodro.jpg";
import photo2 from "../budy.js/Photohome/njari.png";
import photo3 from "../budy.js/Photohome/baghbani.jpg";
import photo4 from "../budy.js/Photohome/yadak.jpg";
import photo5 from "../budy.js/Photohome/janabi.jpg";


function Homephoto(){

    return(
<div className="bctgy">

  <div className="ctgy1">

      <div className="ctgy11">

  <img src={photo1} alt=""/>

      </div>

      <div className="ctgy12">

  <img src={photo2} alt=""/>

      </div>

  </div>


   <div className="ctgy2">

         <div className="ctgy21">

   <img src={photo3} alt=""/>

         </div>

          <div className="ctgy22">

   <img src={photo4} alt=""/>

          </div>

           <div className="ctgy23">

   <img src={photo5} alt=""/>

           </div>


   </div>




</div>
    )
}

export default Homephoto;