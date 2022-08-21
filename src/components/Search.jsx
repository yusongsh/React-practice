import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Test from "../data.json";

const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  textAlign: "center",
  margin: "100px 0",
};

const displayStyle = {
  marginBottom: "30px",
};

// Sample data
const data = [
  { name: "Ben", email: "ben@gmail.com" },
  { name: "Jen", email: "jen@gmail.com" },
  { name: "Samm", email: "samm@gmail.com" },
  { name: "Jake", email: "jake@gmail.com" },
  { name: "Lio", email: "lio@gmail.com" },
  { name: "Kenny", email: "kenny@gmail.com" },
];

function Search() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterData = data.filter((person) =>
    person.name.toLocaleLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={titleStyle}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          &nbsp;&nbsp;&nbsp;Back to Home
        </Link>
        <p>make a search bar and filter the results based on the data given</p>
      </div>

      {/* Display the result under */}
      <div>
        <h1>Search</h1>
        <div>
          <form action="">
            <input
              type="text"
              placeholder="search names"
              onChange={handleSearch}
            ></input>
          </form>

          {filterData.map((filteredPerson) => {
            return (
              <div
                key={`${filteredPerson.name}-${Math.floor(Math.random())}`}
                style={displayStyle}
              >
                <p>{filteredPerson.name}</p>
                <p>{filteredPerson.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
