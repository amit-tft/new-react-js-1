import {LOGO_URL} from '../utils/constants';
import {useState} from 'react';

const Header = ()=> {

const [btnName,setBtnName] = useState("Login")
  console.log("Header is rendered");

    return(
        <div id='header'>
         <div id='logo'>
        <img src={LOGO_URL}></img>
         </div>
         <div id='navigation'>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <li><button id='btn' onClick={()=> btnName==="Login" ? setBtnName("Logout") : setBtnName("Login") }>{btnName}</button></li>
           </ul>
         </div>

        </div>
    )
}

export default Header