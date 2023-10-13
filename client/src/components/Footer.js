import React from "react";
import OrganisationLink from "./OrganisationLink";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";

const Footer = () => {
    return (
        <footer>
            <OrganisationLink organisationName="decodenoir.org" organisationText="This interactive map is part an ethnography exhibition concept that aims to seed a coherent African Diaspora identity narrative in hearts and minds worldwide" />
            <OrganisationLink organisationName="codeyourfuture.io" organisationText="A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry." />
            <p>Engineered by Team Rhythm Code</p>
            <p><img src={linkedinIcon} alt="linkedin company logo" />Christina Mifsud</p>
            <p><img src={linkedinIcon} alt="linkedin company logo" />Delnia Alipour</p>
            <p><img src={linkedinIcon} alt="linkedin company logo" />Irianni Munoz</p>
            <p><img src={linkedinIcon} alt="linkedin company logo" />Man Sang Sin</p>
            <p><img src={githubIcon} alt="github company logo" />See source code on Github</p>
        </footer>
    );
};

export default Footer;