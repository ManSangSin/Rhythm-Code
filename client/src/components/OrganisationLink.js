import React from "react";

const OrganisationLink = ({ organisationName, organisationText }) => {
    return (
        <div className="organisation-container">
            <h3 className="bold-font">{organisationName}</h3>
            <p>{organisationText}</p>
        </div>
    );
};

export default OrganisationLink;