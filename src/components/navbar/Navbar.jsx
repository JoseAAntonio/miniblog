import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<nav>
			<NavLink to='/'>
				Mini <span>Blog</span>
			</NavLink>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
			</ul>
		</nav>
	);
};
