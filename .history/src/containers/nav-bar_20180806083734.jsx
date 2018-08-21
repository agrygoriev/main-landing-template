import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import FacebookLink from "../components/facebook-link";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.state.logo = props.logo;
    this.state.colors = props.colors;
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar
        expand="md"
        style={{
          background: this.state.colors.primary,
          color: this.state.colors.secondary
        }}
      >
        <NavbarBrand href="/">
          <img
            src={this.state.logo}
            alt="Logo"
            width="auto"
            height="40px"
            style={{ fill: this.state.colors.secondary }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} color="white" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                style={{
                  background: this.state.colors.primary,
                  color: this.state.colors.secondary
                }}
                href="/privacy/"
              >
                Privacy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pix-white pix-nav-link" href="/blog/">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="pix-white pix-nav-link" href="/contacts/">
                Contacts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="pix-white pix-nav-link small-social"
                href="#facebook"
              >
                <FacebookLink colors={this.props.colors} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
