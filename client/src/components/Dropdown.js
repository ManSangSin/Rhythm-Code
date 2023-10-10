import React from "react";

const Dropdown = ({ open, trigger, rhythmMenuList }) => {

	return (
		<div className="dropdown">
			{trigger}
			{open ? (
				<ul className="rhythmMenuList">
					{rhythmMenuList.map((rhythmObject) => (
						<button
							key={rhythmObject.id}
							onClick={() => handleShow(rhythmObject)}>
							<li className="rhythmMenuItem">{rhythmObject.rhythm}</li>
						</button>
					))}
				</ul>
			) : null}
		</div>
	);
};


export default Dropdown;