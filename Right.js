import { useState } from "react";

const Right=()=>{
const [data,setData]=useState([
    {title:"NOT COVERED LIVE", name:"ENGLAND",name1:"India", batting:"Bangladeh elected to bat first", target: "Target:200", overs:"Overs:20",button:"DELETE"},
    {title:"NOT COVERED LIVE",name:"Pakistan",name1:"Newzeland",batting:"Newzeland decided to bowl first",target:"Target:180",overs:"Overs:20",button:"DELETE"},
    {title:"NOT COVERED LIVE",name:"Ireland",name1:"Scotland",batting:"Ireland decided to bat first",target:"Target:210",overs:"Overs:20",button:"DELETE"},
    {title:"NOT COVERED LIVE",name:"Westindies",name1:"SouthAfrica",batting:"SouthAfrica decided to bat first",target:"Target:150",overs:"Overs:20",button:"DELETE"}]);
const Delete=(Name)=>{
setData( 
data.filter((obj)=> obj.title !==Name)
)

}
    return(
        <div>

<div className="score">

{
    data.map((bat) =>(
       
        <div class="card text-bg-light mb-3" style={{height:200,width:360}} >
            <div className="card-header">ICC T20 WORLDCUP</div>
  <div className="card-body">
    <h6 className="card-title" style={{color:"red"}}>{bat.title}</h6>
    <p className="card-text"> {bat.name}</p>
    <p className="card-text"> {bat.name1}        </p>
    <p className="card-text"> {bat.batting}        </p>
<p className="om">{bat.target} </p>
<p className="om"> {bat.overs}</p>
  </div>
</div>


    ))

}







</div>

        </div>
    );
}
export default Right;