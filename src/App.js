import './App.css';
import Conclusion from './Conclusion';
import DonateForm from './DonateForm';
import { useState,useEffect } from 'react';
import NavBar from "./NavBar"
import{Routes,Route}from 'react-router-dom'
import DonationsList from './donationsList'
import { createContext } from 'react';
export const DollarContext =createContext();
function App() {
let [rate,setRate]=useState({dollar:undefined,currentyInSite:"ILS"})
useEffect(()=>{
fetch("//v6.exchangerate-api.com/v6/b700c2f9162bca89c58c57e9/latest/USD").then(response=>{
 let x=response.json()
 return x
}).then(res=>{
 setRate({dollar:res.conversion_rates.ILS,currentyInSite:"ILS"})
})
},[])
console.log(rate)
const changeCurrencyInSite=()=>{
  console.log(1)
  setRate({...rate,currentyInSite:rate.currentyInSite=="ILS"?"USD":"ILS"})
  console.log(rate)
}

const addDonor=(donor)=>{
    let copy=[...donateArr,donor]
    setDonateArr(copy)
  } 
  let [donateArr,setDonateArr]=useState([{name:"chani",sum:500,inscription:"yesua",date:new Date()},
  {name:"chai",sum:500,inscription:"bracha",date:new Date()}]);
  return (<>
  <DollarContext.Provider value={changeCurrencyInSite}>
  <NavBar/>
  </DollarContext.Provider>
  <Conclusion myDonorArr={donateArr}/>
  <Routes>
  <Route path='donateForm' element={<DonateForm myDonorArr={donateArr} addFunction={addDonor}/>}/>
  <Route path='allDonate' element={<DonationsList myDonorArr={donateArr}/>}/>
  </Routes>

  </>
  );
}

export default App;
