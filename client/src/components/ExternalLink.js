import React from "react";

const ExternalLinks = ({ companyIcon, text, linkUrl }) => {
	return (
		<a href={linkUrl}>
			<p className="link">
				<img className="link-icon" src={companyIcon} alt="company logo" />
				{text}
			</p>
		</a>
	);
};

export default ExternalLinks;
