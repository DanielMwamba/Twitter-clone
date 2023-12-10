import { Trend, ShowMore } from "..";
import { iconsetting } from "../../icons";

function Trends() {
  return (
  <>
    <div className="trends-list">
      <div className="trendings-title">
        <h3>Trends for you</h3>
        <img src={iconsetting} />
      </div>

      <Trend country={"Turkey"} subject={"#SQUID"} />
      <Trend country={"Turkey"} subject={"#SQUID"} />
      <Trend country={"Turkey"} subject={"#SQUID"} />
      <Trend country={"Turkey"} subject={"#SQUID"} />
      <ShowMore />
    </div>
    
  </>
  );
}

export default Trends;
