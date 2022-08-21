import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Input from "./Input";
import Square from "./Square";

const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  textAlign: "center",
  margin: "100px 0",
};

function Color() {
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <div style={titleStyle}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          &nbsp;&nbsp;&nbsp;Back to Home
        </Link>
        <p>
          Challange: Input color and make the place above change to match the
          color you input
        </p>
      </div>

      {/* Display the result under */}
      <div>
        <h1>DISPLAY the result under</h1>
      </div>
      <div>
        <Square colorValue={colorValue} />
        <Input colorValue={colorValue} setColorValue={setColorValue} />
      </div>
    </>
  );
}

export default Color;
