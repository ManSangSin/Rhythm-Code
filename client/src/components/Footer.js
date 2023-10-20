import React from "react";
import "./Footer.css";
import OrganisationLink from "./OrganisationLink";
import linkedinIcon from "../images/linkedin-icon.svg";
import githubIcon from "../images/github-icon.svg";
import ExternalLink from "./ExternalLink";
import instagramIcon from "../images/instagram-icon.svg";

const disclaimerData = {
	content:
		"Working under the artistic name Unity, Deirdre Molloy will exhibit the Black Atlantic Rhythm Codes map in Nantes, France in 2024. All contributors will be credited, with permission, including the creators of this Code Your Future prototype. The exhibition will be co-produced by Gerador and promoted by Project Manifest.",
	icon: instagramIcon,
	text: "@projectmanifesteu",
	url: "https://www.instagram.com/projectmanifesteu/",
};

const organisationLinksData = [
	{
		name: "decodenoir.org",
		text: "This interactive map is part an ethnography exhibition concept that aims to seed a coherent African Diaspora identity narrative in hearts and minds worldwide",
		url: "https://www.decodenoir.org/",
	},
	{
		name: "codeyourfuture.io",
		text: "A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry.",
		url: "https://codeyourfuture.io/",
	},
];

const teamLinkedInData = [
	{
		icon: linkedinIcon,
		text: "Christina Mifsud",
		url: "https://www.linkedin.com/in/christinamifsud/",
	},
	{
		icon: linkedinIcon,
		text: "Delnia Alipour",
		url: "https://www.linkedin.com/in/delnia-alipour-848b57106/",
	},
	{
		icon: linkedinIcon,
		text: "Irianni Munoz",
		url: "https://www.linkedin.com/in/irianni-munoz-693a36164/",
	},
	{
		icon: linkedinIcon,
		text: "Man Sang Sin",
		url: "https://www.linkedin.com/in/man-sang-sin/",
	},
];

const projectData = {
	icon: githubIcon,
	text: "See source code on Github",
	url: "https://github.com/ManSangSin/Rhythm-Code",
};

const organisationLinkElements = organisationLinksData.map((organisation) => {
	return (
		<OrganisationLink
			key={organisation.name}
			organisationName={organisation.name}
			organisationText={organisation.text}
			organisationUrl={organisation.url}
		/>
	);
});

const teamLinkedInElements = teamLinkedInData.map((link) => {
	return (
		<ExternalLink
			key={link.text}
			companyIcon={link.icon}
			text={link.text}
			linkUrl={link.url}
		/>
	);
});

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-disclaimer">
					<p>{disclaimerData.content}</p>
					<ExternalLink
						companyIcon={disclaimerData.icon}
						text={disclaimerData.text}
						linkUrl={disclaimerData.url}
					/>
				</div>
				<div className="grid-container">
					<div className="organisation-links-container">
						{organisationLinkElements}
					</div>
					<div className="external-links-container">
						<div>
							<p className="footer-medium-font">
								Engineered by Team Rhythm Code
							</p>
							{teamLinkedInElements}
						</div>
						<div>
							<ExternalLink
								companyIcon={projectData.icon}
								text={projectData.text}
								linkUrl={projectData.url}
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
