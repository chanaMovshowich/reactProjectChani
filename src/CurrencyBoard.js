import { useContext } from "react"
import { DollarContext } from './App';
const CurrencyBoard=()=>{
    let contextObject=useContext(DollarContext);
    return (<input type="button" value="change" onClick={contextObject.changeCurrencyInSite}/>);
}
export default CurrencyBoard