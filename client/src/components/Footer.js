import React from "react";
import OrganisationLink from "./OrganisationLink";

const Footer = () => {
    return (
        <footer>
            <h3>decodenoir.org</h3>
            <p>
                This interactive map is part an ethnography exhibition concept that aims to seed a coherent African Diaspora identity narrative in hearts and minds worldwide
            </p>
            <h3>codeyourfuture.io</h3>
            <p>
                A UK based non-profit organisation that trains refugees & disadvantaged people to become web developers and helps them to find work in the tech industry.
            </p>
            <OrganisationLink />
            <OrganisationLink />
        </footer>
    );
};

export default Footer;