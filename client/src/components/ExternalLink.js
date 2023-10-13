import React from "react";

const ExternalLinks = ({ companyIcon, text }) => {
    return (
        <p className="link"><img className="link-icon" src={companyIcon} alt="company logo" />{text}</p>
    );
};

export default ExternalLinks;