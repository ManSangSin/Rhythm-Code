import React from "react";
import "./Footer.css";
import OrganisationLink from "./OrganisationLink";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import ExternalLink from "./ExternalLink";
import instagramIcon from "../assets/instagram-icon.svg";

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

const externalLinksData = [
	{
		icon: linkedinIcon,
		text: "Christina Mifsud",
		url: "https://github.com/christina-mifsud",
	},
	{
		icon: linkedinIcon,
		text: "Delnia Alipour",
		url: "https://github.com/DelniaAlipour",
	},
	{
		icon: linkedinIcon,
		text: "Irianni Munoz",
		url: "https://github.com/munozirianni1988",
	},
	{
		icon: linkedinIcon,
		text: "Man Sang Sin",
		url: "https://github.com/ManSangSin",
	},
	{
		icon: githubIcon,
		text: "See source code on Github",
		url: "https://github.com/ManSangSin/Rhythm-Code",
	},
];

const organisationLinkElements = organisationLinksData.map((organisation) => {
	console.log(organisation);
	return (
		<OrganisationLink
			key={organisation.name}
			organisationName={organisation.name}
			organisationText={organisation.text}
			organisationUrl={organisation.url}
		/>
	);
});

const Footer = () => {
	return (
		<footer>
			<div className="footer-disclaimer">
				<p>{disclaimerData.content}</p>
				<ExternalLink
					companyIcon={disclaimerData.icon}
					text={disclaimerData.text}
					linkUrl={disclaimerData.url}
				/>
			</div>
			<div className="flex-container">
				<div className="organisation-links-container">
					{organisationLinkElements}
				</div>
				<div className="external-links-container">
					<div>
						<p className="medium-font">Engineered by Team Rhythm Code</p>
						<ExternalLink
							companyIcon={externalLinksData[0].icon}
							text={externalLinksData[0].text}
							linkUrl={externalLinksData[0].url}
						/>
						<ExternalLink
							companyIcon={externalLinksData[1].icon}
							text={externalLinksData[1].text}
							linkUrl={externalLinksData[1].url}
						/>
						<ExternalLink
							companyIcon={externalLinksData[2].icon}
							text={externalLinksData[2].text}
							linkUrl={externalLinksData[2].url}
						/>
						<ExternalLink
							companyIcon={externalLinksData[3].icon}
							text={externalLinksData[3].text}
							linkUrl={externalLinksData[3].url}
						/>
					</div>
					<div>
						<ExternalLink
							companyIcon={externalLinksData[4].icon}
							text={externalLinksData[4].text}
							linkUrl={externalLinksData[4].url}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
