import React from "react";
import { Card } from "./Card.js";
import { Footer } from "./Footer.js";
import { Navbar } from "./Navbar.js";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Card />
			<Footer/>
		</React.Fragment>
	);
};

export default Home;