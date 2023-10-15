import React from "react";

const OrganisationLink = ({
	organisationName,
	organisationText,
	organisationUrl,
}) => {
	return (
		<div className="organisation-container">
			{/* rel needs to be specified when target is used as security risk for older browsers */}
			<a href={organisationUrl} target="_blank" rel="noreferrer">
				<h3 className="bold-font">{organisationName}</h3>
			</a>
			<p>{organisationText}</p>
		</div>
	);
};

export default OrganisationLink;
