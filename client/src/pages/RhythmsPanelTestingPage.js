import { useState } from "react";

const RhythmsDropDown = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => { // toggles value of open
		setOpen(!open); // negates value of open
	};


	return (
		<div className="dropdown">
			<button onClick={handleOpen}>Dropdown</button>
			{open ? (
				<ul className="menu">
					<li className="menu-item">
						<button>Menu 1</button>
					</li>
					<li className="menu-item">
						<button>Menu 2</button>
					</li>
				</ul>
			) : null}
			{open ? <div>Is Open</div> : <div>Is Closed</div>}
		</div>
	);
};

export default RhythmsDropDown;