const helloReact1 = React.createElement(
  "h1",
  { style: { color: "red" }, className: "header" },
  "Hello React"
);

const helloReact2 = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello React"),
  React.createElement("p", null, "React is Cool")
);

const helloReact3 = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello Dojo!"),
  React.createElement("h3", null, "Things to do:"),
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Learn React"),
    React.createElement("li", null, "Reach Diamond rank in SC2"),
    React.createElement("li", null, "Get a job")
  )
);

ReactDOM.render(helloReact3, document.getElementById("root"));
