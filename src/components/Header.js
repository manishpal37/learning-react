import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  console.log("Header rendered");
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is btnNameReact, then useEffect is called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// if we use normal js variable instead if useState , it will work but our UI will not be updated.
// That's why we use useState to get out UI rendered dynamically

// react useState will render the full header component but it only updates the changed state by recoincilation algo/ diff algo of oldVirtual DOM vs new Virtual DOM.

// How can we modify the const variable ??
// whenever we trigger ssetBtnNameReact , it will call the new btnNameReact (instance/version) will be created , due to which it checks only difference and change that specific thing only.
// That's why React is very fast
