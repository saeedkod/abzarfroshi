import React from "react";
import photo1 from "../photo/1.jpg"
import photo2 from "../photo/2.jpg"
import photo3 from "../photo/3.jpg"
function Photo(){


return(
    <div className="allphoto">

           <div className="photo1">
            <img src ={photo1} alt=""/>
           </div>
<div className="photo23">
           <div className="photo2"> 
           <img src ={photo2}  alt=""/>
           </div>

           <div className="photo3">  
           <img src ={photo3}  alt=""/>
           </div>
</div>

    </div>
)

}





export default Photo;