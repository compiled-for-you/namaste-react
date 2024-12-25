import React from "react";
import ReactDOM from "react-dom/client";

const heading = [React.createElement("h1", {}, "Here goes the react heading bhagg..."), 
    React.createElement("h3", {}, "Here goes the smaller react heading...")];
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("baseElement"));
const jsxHeading = <h1>Ye to JSX ki heading hai</h1>;
root.render(heading);
setTimeout(() => root.render(jsxHeading), 5000);