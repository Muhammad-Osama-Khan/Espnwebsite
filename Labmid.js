import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import {BiSearchAlt2} from "react-icons/bi";
import "./mid.css"
const Mid=()=>{
    return(<div>

<div className="web">

<h3 id="logo">ESPN CRIC</h3>

<ul id="items">
    <li className="item">SERIES</li>

    <div class="dropdown">
        <a class="dropbtn">Live Score</a>
        <div class="dropdown-content">
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
      </div> 








   

    <li className="item"><Link to="TEAMS">  TEAMS    </Link></li>
    <li className="item"> <Link to="NEWS"> NEWS </Link></li>
    <li className="item">FEATURES</li>
    <li className="item">VIDEOS</li>
    <li className="item">STATS</li>
</ul>
<p className="moon" > EDITION PK</p>

<h5 className="moon"> <BsFillMoonFill/></h5>
<h5 className="moon"> <BsFillBellFill/> </h5>
<h5 className="moon"><BiSearchAlt2/></h5>
</div>




    </div>);
}
export default Mid;