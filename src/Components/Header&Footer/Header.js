import React,{useState} from "react";
import {AppBar, IconButton} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Drawers from "./SideDrawer";
import MenuOpen from "@material-ui/icons/MenuOpen";
import {Link} from "react-router-dom" ;
import photo1 from "../photo/account.jpg" ;

function Header(){
const [drawerOpen,setDraweropen] = useState(false);
const toggleDrawer = (value) =>{
    setDraweropen(value)
};


return(

<AppBar
position = "fixed" style={{
    backgroundColor: "#b2ffff",
    boxShadow:"none",
    padding: "10px 0px ",
    
}}>
<Toolbar>

 <IconButton  style={{marginRight:"25px", backgroundColor:"#1f80ff", padding:"20px 20px"}} aria-label="Menu" color="inherit" onClick={()=>toggleDrawer(true)}> 
<MenuOpen/>
<div>
       دسته بندی کالا ها     
</div>
</IconButton>



<Drawers open={drawerOpen} close={toggleDrawer}/>


   <div className="header1"  > 
   <Link to="/Components/budy.js/Home" style={{textDecoration :"none" , textDecorationColor:"white"  }} >   خانه   </Link>
  </div>
     
    
  <div className="header2"   >
   <Link to="/Components/budy.js/Frosh" style={{textDecoration :"none" , textDecorationColor:"white"  }} >    فروش به شرکت ها   </Link>
  </div>  
   

  
 <div className="header3" >
 <Link to="/Components/budy.js/Hamkari" style={{textDecoration :"none" , textDecorationColor:"white"  }} >
همکاری در فروش

</Link>
     
  </div>

  <div className="header4">
  <Link to="/Components/budy.js/Amozesh" style={{textDecoration :"none" , textDecorationColor:"white"  }} >         اموزه های ابزار
  </Link>
    
      </div>


      <div className="header5">
      <Link to="/Components/budy.js/Darbareh " style={{textDecoration :"none" , textDecorationColor:"white"  }} >
      درباره ما
      </Link>
      </div>


      <div className="header6">

      <Link to="/Components/budy.js/Tamas " style={{textDecoration :"none" , textDecorationColor:"white"  }} >
       تماس با ما
       </Link>
      </div>




<Link  to="/Components/budy.js/account" style={{textDecoration :"none" , textDecorationColor:"white",  }}  >
    <div className="pica">
      <img  src={photo1} alt=""/> 
      </div>
</Link>



  



</Toolbar>
</AppBar>




)


}
export default Header
