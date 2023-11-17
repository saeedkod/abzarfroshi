import {React , useState, useEffect} from "react";
import Footer from "../Header&Footer/Footer";
import {Link} from "react-router-dom" ;
import Photo1 from "../photo.account/2451.jpg";
function Vrod (){
const account = {username: "", email:"", password:""};
const [formvalues,setformvalues] = useState(account);
const [formerrors,setformerrors] = useState({});
const [issubmit,setissubmit] = useState({});
const  validate = (values ) =>{
    const errors = {};
    if (!values.username){
        errors.username = "usernameis required";
    }
  
    if (!values.password){
        errors.password = "password is required"
    } else if (values.password.length < 4 ) {
        errors.password = "password must be more than 4";
    } else if ( values.password.length > 10 ) {
        errors.password = "password can not be morthan 10";
    }
    return errors;
}

const handlechange = (e) =>{
     const {name , value} = e.target;
     setformvalues({...formvalues, [name]: value})
}
const handlesubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalues));
    setissubmit(true);
}

useEffect (() => {
if (Object.keys(formerrors).length === 0 && issubmit){
    console.log(formvalues);
}
},[formerrors])
    return(
         < div className="acountall" onSubmit = {handlesubmit}>
         <div  className="acountback" >   
       <img  src={Photo1} alt=""  />
           

  <pre className="form1"> {JSON.stringify(formvalues,undefined, 2)} </pre>
 

            <form className="form4">
<div  className="inputall">

<div className="accounttext">

<div className="accounttext1" >
<Link to="/Components/budy.js/account"  style={{textDecoration :"none" , textDecorationColor:"white",  }} >
ثبت نام
</Link>
</div>

<div className="accounttext2" >
<Link to="/Components/budy.js/Vrod"  style={{textDecoration :"none" , textDecorationColor:"white",  }}>
 ورود
</Link>
</div>

</div>

<span>Username</span>
<div className="input1">

 <input type="text" name="username"  placeholder="Username" value={formvalues.username}   onChange={handlechange}/>
</div>
<p> {formerrors.username} </p>




<span>Password</span>
<div className="input3" >

 <input type="password" name="password"  placeholder="Password" value={formvalues.password}  onChange={handlechange} />
</div>
<p> {formerrors.password} </p>
   


<div className="sabt">
<button  >
    ثبت
</button>

</div> 


</div>

</form>
 

</div>
<Footer/>
</div>

    )
}



export default Vrod;