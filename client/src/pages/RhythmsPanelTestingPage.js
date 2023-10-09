import { useState } from "react";

import CityIcon from "./CityIcon";

const RhythmsDropDown = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		// toggles value of open
		setOpen(!open); // negates value of open
	};

	const handleMenuOne = () => {
		console.log("menu1");
		setOpen(false);
	};

	const handleMenuTwo = () => {
		console.log("menu2");
		setOpen(false);
	};

	return (
		<Dropdown
			open={open}
			trigger={
				<button onClick={handleOpen}> Dropdown
					{/* <CityIcon cityName="Havana, Cuba" />  HELP!!!! SVG icon not showing!!  */}
				</button>
			}
			menu={[
				<button onClick={handleMenuOne}>Menu 1</button>,
				<button onClick={handleMenuTwo}>Menu 2</button>,
			]}
		/>
	);
};

const Dropdown = ({ open, trigger, menu }) => {
	return (
		<div className="dropdown">
			{trigger}
			{open ? (
				<ul className="menu">
					{menu.map((menuItem, index) => (
						<li key={index} className="menu-item">
							{menuItem}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default RhythmsDropDown;