import {calcDonations,calcPrecent}from "./function"
const  Conclusion= (props) => {
    let {myDonorArr}=props
    const purpose=2000000; 
    let sum=calcDonations(myDonorArr)
    let precent=calcPrecent(purpose,myDonorArr)

    return ( <>{sum}    {purpose}     {precent}       {myDonorArr.length}</>);
}
 
export default Conclusion;
