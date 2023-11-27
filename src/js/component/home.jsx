import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<br />
			<div className="row">
				<div className="col">
					<Card titulo = "paisaje 1" imagen="https://th.bing.com/th/id/R.924886a69104a242a660f66b3d536e1d?rik=JU%2fSyD1qqfXAQA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-epneGMSghoM%2fT7Etq2B4yEI%2fAAAAAAAAc9U%2fu7F8lh0GkCw%2fs1600%2fReflexion-Montanas-Lagos_Paisajes-Naturales.jpg&ehk=dlehX%2faGfc7H2JT5FnqHL2%2bAjFRy%2fbsN5VtvQqCGEtQ%3d&risl=&pid=ImgRaw&r=0" />
				</div>
				<div className="col">
					<Card titulo = "paisaje 2" imagen="https://th.bing.com/th/id/OIP.YritCGDoZHqh6FOGW0A3uwHaEo?w=1440&h=900&rs=1&pid=ImgDetMain" />
				</div>
				<div className="col">
					<Card titulo = "paisaje 3" imagen="https://th.bing.com/th/id/R.cbe051446cf294c4c56765e52322d6fa?rik=VP9fXKtzR%2fD6Jw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WibI4MqlR7s%2fT2OMAMNi_9I%2fAAAAAAAAWzY%2ff7AGF2Twuf4%2fs1600%2fLos-mas-Hermosos-Paisajes-Naturales_03.jpg&ehk=InDIwVi74tt5JYpfb2ThhQACgqe8Zuob1lxICHn73Ag%3d&risl=&pid=ImgRaw&r=0"/>
				</div>
				<div className="col">
					<Card titulo = "paisaje 4" imagen="https://th.bing.com/th/id/R.5e367b5243f17e2e3c73e4b6310c0fe7?rik=81Y2HCTh3RNd5A&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6sdcHvyXjVs%2fT1VkopOy5TI%2fAAAAAAAAVwY%2f0LeAsprJFfo%2fs1600%2fpaisajes-naturaleza-caminos-bosques_03.jpg&ehk=gK5MqluBMt73pUlb%2bSBjfRUG2WuQbXgyA2cYWJn7sAo%3d&risl=&pid=ImgRaw&r=0" />
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
