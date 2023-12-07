import { iconsetting } from "../icons";
function Trends() {
    return (

        <div className="trends">
              <input
                className="search-twitter-input"
                placeholder="Search Twitter"
                type="text"
                name="search-input"
                id="search-input" />

            <div className="trend-list">

                <div className="trend-list-content">

                </div>
                <h4>Trend for you</h4>
                <img src={iconsetting}></img>
           
                
            </div>
        </div>
      
    )
}

export default Trends;