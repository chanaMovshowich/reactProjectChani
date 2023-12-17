import {calcDate} from "./function"
const OneDonate = (props) => {
  console.log(props.myDonate)
    return (<><h1>donate:</h1>
    <h2>{props.myDonate.name}</h2>
    <h2>{props.myDonate.sum}</h2>
    <h2>{props.myDonate.inscription}</h2>
    <h2>{props.date}</h2>
      {/* <h2>{calcDate(props.date)}</h2>   */}
    </>  );
}
 
export default OneDonate;
