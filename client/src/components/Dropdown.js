// import React from "react";

const Dropdown = ({ open, trigger, handleCloseDropdown, handleShowModal, rhythms }) => {

	return (
		<div className="dropdown">
			{trigger}
			{open ? (
				<ul className="rhythmObject">
					{rhythms.map((rhythmObject) => (
						<button
							key={rhythmObject.id}
							onClick={() => {
								handleShowModal(rhythmObject);
								handleCloseDropdown();
							}}
						>
							<li className="rhythmObject">{rhythmObject.rhythm}</li>
						</button>
					))}
				</ul>
			) : null}
		</div>
	);
};


export default Dropdown;