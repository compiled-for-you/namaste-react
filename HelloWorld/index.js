const heading = [React.createElement("h1", {}, "Here goes the react heading..."), 
    React.createElement("h3", {}, "Here goes the smaller react heading...")];
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("baseElement"));
root.render(heading);