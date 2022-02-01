import React from "react";
import "./home.css"
import { Link } from "react-router-dom";

const Home = () => {
	return (
			<div className="container">
				<div className="sidebar">
				<div className="logo">
					<img src = "https://image.shutterstock.com/image-vector/real-estate-logo-260nw-1615688014.jpg" height="100px" />
				</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about-us">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				</div>
				<div className="footer">
					<span className="left">Created By Nanu Vitalie</span>
					<span className="right">Assist Software 2022</span>
				</div>
			</div>


	);
};

export default Home;