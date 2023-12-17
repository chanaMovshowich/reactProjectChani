import {NavLink} from 'react-router-dom'
import CurrencyBoard from './CurrencyBoard';
import { useContext } from 'react';
import { DollarContext } from './App';
import CustomizedSwitches from './switch.js'
const NavBar = () => {
    let contextObject=useContext(DollarContext);
    return (<div> <CustomizedSwitches/> 
    <nav> <img src={require("./donate.jpg")} alt="donate"/><NavLink to="donateForm">לתרומה </NavLink><NavLink to="allDonate">כל התרומות</NavLink></nav><CurrencyBoard/></div>  );
}
 
export default NavBar;