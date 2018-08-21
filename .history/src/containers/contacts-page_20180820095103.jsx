import React from "react";
import logo from "../assets/img/logo.svg";
import PageHeading from "../components/page-heading";
import ContactsSection from "../components/contacts-section";
import NavigationBar from "./nav-bar";
import FooterBlock from "./footer";
const ContactsPage = props => {
  console.log(props);
  return (
    <React.Fragment>
      <NavigationBar navbar={props.navbar} logo={logo} colors={props.colors} />
      <PageHeading
        heading={props.contacts.heading}
        subheading={props.contacts.subheading}
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
