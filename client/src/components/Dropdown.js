import React from "react";

const Dropdown = ({ rhythms, handleShowModal, open, trigger }) => {

	return (
		<div className="dropdown">
			{trigger}
			{open ? (
				<ul className="rhythmObject">
					{rhythms.map((rhythmObject) => (
						<button
							key={rhythmObject.id}
							onClick={() => handleShowModal(rhythmObject)}
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