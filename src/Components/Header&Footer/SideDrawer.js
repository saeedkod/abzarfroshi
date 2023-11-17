

import React from "react";
import {Drawer ,List,ListItem,} from "@material-ui/core";
import {Link} from "react-router-dom";

function SideDrawer(props){
    const{open,close} = props
    return(
<Drawer anchor= "left" open= {open}  onClose={()=> close(false) }>

<List  component="nav" style={{background:"rgb(154, 252, 240)" ,padding:"10px 10px" }} >



<ListItem >


<Link to="/Components/budy.js/khodro" style={{textDecoration :"none" , color:"black" , marginTop:"8%",fontSize:"20px",  }}>
ابزار الات کارگاهی و گاراژی
</Link>




</ListItem>



<ListItem >


<Link to="/Components/budy.js/Barghi" style={{textDecoration :"none" , color:"black", marginTop:"10%" ,fontSize:"20px"}}>
ابزار های شارژی و برقی
</Link>




</ListItem>






<ListItem >

<Link to="/Components/budy.js/Badi" style={{textDecoration :"none" , color:"black" ,marginTop:"10%",fontSize:"20px" }}>
ابزارهای بادی یا پنوماتیک 
</Link>

</ListItem>


<ListItem >

<Link to="/Components/budy.js/Boresh" style={{textDecoration :"none" , color:"black" , marginTop:"10%" ,fontSize:"20px"}}>
ابزار های جوش و برش
</Link>

</ListItem>












</List>





</Drawer>

    )
}
export default SideDrawer