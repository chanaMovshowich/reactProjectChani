import { useState } from "react";
import OneDonate from "./OneDonate";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DonationList = (props) => {
    let {myDonorArr}=props
    let [findSum,setFindSum]=useState("");
    let[findInscription,setFindInscription]=useState("")
    let changeSumToShow=(event)=>{
        let _name=event.target.name
        if(_name==="findInscription")
        setFindInscription(event.target.value)
         else
        setFindSum(event.target.value)   
         console.log(findSum)
    }
let sortArray=()=>{
   let x= myDonorArr.sort((a,b)=>{state=="true"?a.date>b.date?1:-1:a.date>b.date?-1:1
    })
    console.log(x)
}
let state=true
const changeValue=(event)=>{
    state=event.target.checked
    sortArray()
}
let i=0;
return(<>
<Stack direction="row" spacing={1} alignItems="center">
<Typography>הישן ביותר</Typography>
<AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onChange={changeValue} />
<Typography>החדש ביותר</Typography>
</Stack><input type="text" name="findSum1" on onBlur={changeSumToShow}/>
<input type="text" name="findInscription"  on onBlur={changeSumToShow}/>
{myDonorArr.filter(donor=>(donor.sum==findSum|| findSum==="")
&&( donor.inscription.includes(findInscription)||findInscription==="")).map((item)=>{return<li key={i++}><OneDonate myDonate={item}/></li>})}</>)
   
}
 
export default DonationList;
