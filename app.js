const heading = React.createElement("h1", {}, "Hello World from React");
console.log("heading:", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root:", root);

root.render(heading);
