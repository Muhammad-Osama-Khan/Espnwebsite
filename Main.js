import { useState } from "react"

const Main =()=>{
 const [data,setData]=useState([

   
  {headline:"PAKISTAN CRICKET NEWS",image:"./Image/images.jpg", description:"Shaheen best bowling figure against India amazing spell from Shaheen Shah Afridi",news:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur porttitor ",img:"./Shadab.jpg",describe:"Nunc vel enim nulla. Aenean et lacinia lectus. Phasellus magna lectus, gravida ut sodales quis,",button:"Delete"},


  {
      headline:"AUSTRILIAN CRICKET NEWS", image:"./Image/Usman.jpg",description:"Usman khawaja makes his 10th test century against England in home series test match",news:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur porttitor",img:"./Starc.jpg",describe:"Nunc vel enim nulla. Aenean et lacinia lectus. Phasellus magna lectus, gravida ut sodales quis,",button:"Delete" },
  
   


 ]);
                      
 
    
// const [data,setData]=useState([
//   {  title:"NOT COVERED LIVE", name:"Bangladesh",name1:"India", batting:"Bangladeh elected to bat first", target: "Target:200", overs:"Overs:20",button:"DELETE"},
//   {title:"NOT COVERED LIVE",name:"Pakistan",name1:"Newzeland",batting:"Newzeland decided to bowl first",target:"Target:180",overs:"Overs:20",button:"DELETE"},
//   {title:"NOT COVERED LIVE",name:"Ireland",name1:"Scotland",batting:"Ireland decided to bat first",target:"Target:210",overs:"Overs:20",button:"DELETE"},
//   {title:"NOT COVERED LIVE",name:"Westindies",name1:"SouthAfrica",batting:"SouthAfrica decided to bat first",target:"Target:150",overs:"Overs:20",button:"DELETE"}
// ]);
    
    
   
const Delete=(Name)=>{
  setData( 
  data.filter((obj)=> obj.image !==Name
  )
  )
  
  }
 



return(<div>
    {



      data.map((sq) =>(
         



        
<div className="cric" >

{/*   
<div class="grid text-center">
  <div class="g-col-4">                
  
  
  <div class="card" style={{width:500, margin:"auto"}}   >
    <h5 class="card-title">{sq.headline}</h5>
  <img src={sq.image} style={{height:170,width:500}} class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text" > {sq.description}</p>
  </div>
</div>




<div class="card mb-3" style={{height:150,width:500, margin:"auto"}} >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={sq.img} style={{height:150}} class="img-fluid rounded-start"  alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{sq.describe}</p>
        <p class="card-text"><small class="text-muted">{sq.news}</small></p>
      </div>
    </div>
  </div>
</div>

  
  
  
  </div>
  
</div> */}


<div class="row" style={{width:600,   }}>
  <div class="col-sm-6">
    <div class="card">
   <img src={"../Shadab.jpg"} style={{height:170,width:270}} class="card-img-top" alt="..." /> 
      <div class="card-body">
        
        <p class="card-text">{sq.description}</p>
        <button onClick={()=>Delete(sq.image)}>{sq.button}</button>


      </div>
    </div>
  </div>
   <div class="col-sm-6">
    <div class="card">
    <img src={sq.image} style={{height:170,width:270}} class="card-img-top" alt="..." /> 
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">{sq.news}</p>
        
<button onClick={()=>Delete(sq.image)}>{sq.button}</button>


      </div>
    </div>
</div>
</div> 














</div>
   ) )
}
</div>);

}
export default Main;