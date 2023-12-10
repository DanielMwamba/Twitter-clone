import { Trendings, FollowerList, } from "..";

function Trends() {
  return (
    <aside className="trends trend">
      <div>
        <input
          className="search-twitter-input"
          placeholder="Search Twitter"
          type="text"
          name="search-input"
          id="search-input"
        />
        <Trendings />
       
        <FollowerList />
      </div>
    </aside>
  );
}

export default Trends;
