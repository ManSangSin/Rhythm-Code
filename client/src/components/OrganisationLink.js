import React from "react";

const OrganisationLink = ({ organisationName, organisationText, organisationUrl  }) => {
    return (
        <div className="organisation-container">
            <a href={organisationUrl}>
                <h3 className="bold-font">{organisationName}</h3>
            </a>
            <p>{organisationText}</p>
        </div>
    );
};

export default OrganisationLink;