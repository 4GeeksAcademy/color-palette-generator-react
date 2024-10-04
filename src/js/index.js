//import react into the bundle
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import HomeDefault ,{ Home } from "./component/home.jsx"; // <---

//render your react application
ReactDOM.createRoot(
    document.querySelector('#react-root')
).render(<>
    <Home/>
</>);

