import React from "react";

import Footer from "./footer.jsx";
import Hero from "./hero.jsx";
import Navbar from "./header.jsx"
import Colors from "./colors.jsx"

//create your first component
export function Home(props) {

	// parte logica 

	const appName = props.title;

	// parte visual jsx
	return (
		<div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
			<Navbar appTitle={appName} />
			<Hero details={undefined} />
			<Colors />
			<Footer />
		</div>
	);
};
