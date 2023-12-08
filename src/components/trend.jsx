import { more2 } from "../icons";

function Trend({ country, subject }) {
  return (
    <div>
      <div className="trending-description">
        <p>Trending in {country} </p>
        <img src={more2} />
      </div>

      <p className="trend-title">{subject}</p>
      <div className="trending-description">
        <p>2.066 Tweets</p>
      </div>
    </div>
  );
}

export default Trend;
