import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//This block is just for display purposes only
const codeString = `
{ name: "Ben-0", age: 20 },
{ name: "Ben-1", age: 12 },
{ name: "Ben-2", age: 82 },
{ name: "Ben-3", age: 42 },
{ name: "Ben-4", age: 10 },
{ name: "Ben-5", age: 39 },
`;

//Challange: Make an unordered list of people in order from youngest to oldest

// Styles for this component, not required by the challenge
const titleStyle = {
  fontSize: "20px",
  fontWeight: 800,
  textAlign: "center",
  margin: "100px 0",
};

const displayStyle = {
  listStyle: "none",
  fontSize: "16px",
  marginBottom: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const arrayPeople = [
  { name: "Ben-0", age: 20 },
  { name: "Ben-1", age: 12 },
  { name: "Ben-2", age: 82 },
  { name: "Ben-3", age: 42 },
  { name: "Ben-4", age: 10 },
  { name: "Ben-5", age: 39 },
];

const sorted = arrayPeople.sort((a, b) => a.age - b.age);
// console.log(sorted);

const display = sorted.map((person) => {
  return (
    <li
      key={`${person.name}-${Math.floor(Math.random())}`}
      style={displayStyle}
    >
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
    </li>
  );
});

function SortAge() {
  return (
    <>
      <div style={titleStyle}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          &nbsp;&nbsp;&nbsp;Back to Home
        </Link>
        <p>
          Challange: Make an unordered list of people in order from youngest to
          using the array given. Try to use sort(),map(), Math.floor(),
          Math.random()
        </p>

        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>

      {/* Display the result under */}
      <div>The following are the results, check code for details</div>
      <div>
        <h1>{display}</h1>
      </div>
    </>
  );
}

export default SortAge;
