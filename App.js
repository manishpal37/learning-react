/**
 *
 * <div id = "parent">
 *  <div id="child">
 *
 *     <h1>Im in h1 tag</h1>
 *     <h1>Im in h2 tag</h1>
 *
 *  </div>
 * </div>
 *
 * ReactElement(object) => HTML(browser understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm an h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(heading); // an object

// heading is an object means react elemets are nothing but the js object
// this render method is converting heading object into an heading h1 tag
