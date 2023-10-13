import React from "react";

const OrganisationLink = ({ organisationName, organisationText }) => {
    return (
        <div>
            <h3>{organisationName}</h3>
            <p>{organisationText}</p>
        </div>
    );
};

export default OrganisationLink;