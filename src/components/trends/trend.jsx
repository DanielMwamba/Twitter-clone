import { more } from "../../icons";

function Trend({ country, subject }) {
  return (
    <div>
      <div >
        <p className="trending-description">Trending in {country} 
        <img src={more} />
        </p>
        <p className="trend-title">{subject}</p>
        <p className="trend-description">
        2.066 Tweets
      </p>
      </div>

    
     
    </div>
  );
}

export default Trend;
