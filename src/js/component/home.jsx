import React from "react";

import Footer from "./footer.jsx";
import Hero from "./hero.jsx";
import Navbar from "./header.jsx"
import Colors from "./colors.jsx"

//create your first component
export function Home() {
	return (
		<div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
			<Navbar />
			<Hero />
			<Colors />
			<Footer />
		</div>
	);
};
