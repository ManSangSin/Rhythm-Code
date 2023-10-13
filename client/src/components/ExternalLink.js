import React from "react";

const ExternalLinks = ({ companyIcon, text }) => {
    return (
        <p><img src={companyIcon} alt="company logo" />{text}</p>
    );
};

export default ExternalLinks;