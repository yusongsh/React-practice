import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState, useEffect } from "react";

const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  textAlign: "center",
  margin: "100px 0",
};
const codeString = `const url = "https://jsonplaceholder.typicode.com/users/1";`;

function ApiCall() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const jsonData = await res.json();
    setData(jsonData);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div style={titleStyle}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          &nbsp;&nbsp;&nbsp;Back to Home
        </Link>
        <p>
          Challange: Given the url below, make this app fetch the data and
          display them in the browser{" "}
        </p>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
      </div>

      {/* Display the result under */}
      <div>
        <h1>DISPLAY the result under</h1>
      </div>

      <div>
        <h2>User Data</h2>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Website:</strong> {data.website}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
      </div>
    </>
  );
}

export default ApiCall;
