import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// React Element - React.createElement => ReactElement(object) => HTMLElement (render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is heading using React Eelemnt"
// );

// JSX heading ~ it looks like html syntax
// jsx (transpiled before it reaches the js engine) => PARCEL - Babel
// Babel a javascript compiler - it is doing the tranpiling  (jsx to htmlElement)
// JS engine doesn't understand jsx - it only understand ECMAScript (ES6)

// const jsxheading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

// React Components - Class based component and Functional component

// const Title = () => <h1 id="heading2">Namaste React Title </h1>;

// const number = 1000;

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <Title /> 🔼 using single Title in component
//       <Title></Title> 🔼 using double Title in component
//       {Title()} 🔼 Title function called in component
//       <h1>Namaste React Functional Component</h1>
//       {number}
//       {console.log("Hi Manish")}
//       {jsxheading}
//     </div>
//   );
// };

// for one line code, we can skip return
