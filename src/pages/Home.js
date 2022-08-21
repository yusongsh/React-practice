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
          <Link to="/sortage">Challenge 1 - Sort Age </Link>
        </p>
        <p>
          <Link to="/search">Challenge 2 - Search Bar</Link>
        </p>
        <p>
          <Link to="/hideshow">Challenge 3 - Show/Hide toggle </Link>
        </p>
        <p>
          <Link to="/api">Challenge 4 - API call </Link>
        </p>
        <p>
          <Link to="/colorpicker">Challenge 5 - Color picker </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
