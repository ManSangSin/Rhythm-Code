import React from "react";
import "./Footer.css";
import OrganisationLink from "./OrganisationLink";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import ExternalLink from "./ExternalLink";

const Footer = () => {
    return (
        <footer>
            <div>
                <OrganisationLink organisationName="decodenoir.org" organisationText="This interactive map is part an ethnography exhibition concept that aims to seed a coherent African Diaspora identity narrative in hearts and minds worldwide" />
                <OrganisationLink organisationName="codeyourfuture.io" organisationText="A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry." />
            </div>
            <div className="external-links-container">
                <div>
                    <ExternalLink companyIcon={linkedinIcon} text="Christina Mifsud" />
                    <ExternalLink companyIcon={linkedinIcon} text="Delnia Alipour" />
                    <ExternalLink companyIcon={linkedinIcon} text="Irianni Munoz" />
                    <ExternalLink companyIcon={linkedinIcon} text="Man Sang Sin" />
                </div>
                <div>
                    <ExternalLink companyIcon={githubIcon} text="See source code on Github" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;