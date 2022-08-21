import React from "react";
import { Link } from "react-router-dom";
import SortAge from "../components/SortAge";

const style = {
  display: "flex",
  flexDirection: "row",
};

function Home() {
  return (
    <div>
      <h1>React Daily Challenges</h1>
      <div>
        <p style={style}>
          <Link to="/sortage">Day 1</Link>
        </p>
        <p>
          <Link to="/search">Day 2</Link>
        </p>
        <p>
          <Link to="/hideshow">Day 3</Link>
        </p>
        <p>
          <Link to="/api">Day 4</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
