import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  textAlign: "center",
  margin: "100px 0",
};

function Sample() {
  return (
    <>
      <div style={titleStyle}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          &nbsp;&nbsp;&nbsp;Back to Home
        </Link>
        <p>Challange: REPLACE DISCRIPTION HERE</p>
      </div>

      {/* Display the result under */}
      <div>
        <h1>DISPLAY the result under</h1>
      </div>
    </>
  );
}

export default Sample;
