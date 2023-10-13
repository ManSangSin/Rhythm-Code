import React from "react";
import OrganisationLink from "./OrganisationLink";

const Footer = () => {
    return (
        <footer>
            <OrganisationLink organisationName="decodenoir.org" organisationText="This interactive map is part an ethnography exhibition concept that aims to seed a coherent African Diaspora identity narrative in hearts and minds worldwide" />
            <OrganisationLink organisationName="codeyourfuture.io" organisationText="A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry." />
        </footer>
    );
};

export default Footer;