import React from "react";
import "./Footer.css";
import OrganisationLink from "./OrganisationLink";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import ExternalLink from "./ExternalLink";
import instagramIcon from "../assets/instagram-icon.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-disclaimer">
                <p>
                    Working under the artistic name Unity, Deirdre Molloy will exhibit the Black Atlantic Rhythm Codes map in Nantes, France in 2024. All contributors will be credited, with permission, including the creators of this Code Your Future prototype. The exhibition will be co-produced by Gerador and promoted by Project Manifest.
                </p>
                <ExternalLink companyIcon={instagramIcon} text="@projectmanifesteu" linkUrl="https://www.instagram.com/projectmanifesteu/" />
            </div>
            <div className="flex-container">
                <div className="organisation-links-container">
                    <OrganisationLink organisationName="decodenoir.org" organisationText="This interactive map is part an ethnography exhibition concept that aims to seed a coherent African Diaspora identity narrative in hearts and minds worldwide" organisationUrl="https://www.decodenoir.org/" />
                    <OrganisationLink organisationName="codeyourfuture.io" organisationText="A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry." organisationUrl="https://codeyourfuture.io/" />
                </div>
                <div className="external-links-container">
                    <div>
                        <p className="medium-font">Engineered by Team Rhythm Code</p>
                        <ExternalLink companyIcon={linkedinIcon} text="Christina Mifsud" linkUrl="https://github.com/christina-mifsud" />
                        <ExternalLink companyIcon={linkedinIcon} text="Delnia Alipour" linkUrl="https://github.com/DelniaAlipour" />
                        <ExternalLink companyIcon={linkedinIcon} text="Irianni Munoz" linkUrl="https://github.com/munozirianni1988" />
                        <ExternalLink companyIcon={linkedinIcon} text="Man Sang Sin" linkUrl="https://github.com/ManSangSin" />
                    </div>
                    <div>
                        <ExternalLink companyIcon={githubIcon} text="See source code on Github" linkUrl="https://github.com/ManSangSin/Rhythm-Code" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;