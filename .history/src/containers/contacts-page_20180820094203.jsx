import React from "react";
import PageHeading from "../components/page-heading";
import ContactsSection from "../components/contacts-section";
import FooterBlock from "./footer";
const ContactsPage = props => {
  console.log(props);
  return (
    <React.Fragment>
      <PageHeading
        heading={props.heading}
        subheading={props.subheading}
        colors={props.colors}
      />
      <ContactsSection {...props} />
      <FooterBlock
        lang={props.lang}
        info={props.footer}
        contacts={props.contacts}
        logo={props.logo}
        colors={props.colors}
      />
    </React.Fragment>
  );
};

export default ContactsPage;
