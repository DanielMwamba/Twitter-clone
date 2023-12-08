import {Trend} from "../components";
import { iconsetting } from "../icons";

function Trends() {
    return (

      

            <div className="trends-list">

                <div className="trend">

                <div className="trendings-title">
                <h3>Trends for you</h3>
                <img src={iconsetting} />
                </div>

                <Trend country={"Turkey"} subject={"#SQUID"}/>
                <Trend country={"Turkey"} subject={"#SQUID"}/>
                <Trend country={"Turkey"} subject={"#SQUID"}/>
                <Trend country={"Turkey"} subject={"#SQUID"}/>
                </div>
             
                
           
                
            </div>
        
      
    )
}

export default Trends;