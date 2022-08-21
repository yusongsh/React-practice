import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  textAlign: "center",
  margin: "100px 0",
};
const data = [
  { name: "Ben", email: "ben@gmail.com" },
  { name: "Jen", email: "jen@gmail.com" },
  { name: "Samm", email: "samm@gmail.com" },
  { name: "Jake", email: "jake@gmail.com" },
  { name: "Lio", email: "lio@gmail.com" },
  { name: "Kenny", email: "kenny@gmail.com" },
];

function HideShow() {
  const [show, setShow] = useState(false);
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
        <p>
          Challange: Make the button functional - A click on button should
          toggle (show/hide) the string `Toggle Challenge` each time it is
          pressed
        </p>
      </div>

      {/* Display the result under */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button onClick={() => setShow(!show)}>
          {show ? "close" : "open"}
        </button>

        {show && (
          <div
            style={{
              backgroundColor: "yellow",
              width: "10rem",
              padding: "1rem",
            }}
          >
            <form
              style={{
                paddingBottom: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="search names"
                onChange={handleSearch}
              ></input>
            </form>

            {filterData.map((person) => {
              return (
                <div
                  style={{
                    paddingBottom: ".7rem",
                  }}
                >
                  <p>{person.name}</p>
                  <p>{person.email}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default HideShow;
