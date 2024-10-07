//import react into the bundle
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import HomeDefault ,{ Home } from "./component/home.jsx"; // <---

//render your react application
let app = ReactDOM.createRoot(
    document.querySelector('#react-root')
)
const appName = "Color Generator";

app.render(<Fragment>
    <Home title={appName} />
</Fragment>);
