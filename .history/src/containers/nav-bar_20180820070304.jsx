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
import ReactSVG from "react-svg";
// import navbar from "../content/navbar.json";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.state.logo = props.logo;
    this.state.colors = props.colors;
    this.state.navlinks = props.navbar.navlinks;
  }
  componentDidMount() {
    // console.log(this.props);
    console.log(this.state);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header className="navigation">
        <Navbar
          expand="md"
          style={{
            background: this.state.colors.primary,
            color: this.state.colors.secondary
          }}
        >
          <NavbarBrand href="/">
            <ReactSVG
              path={this.state.logo}
              svgClassName="logo"
              svgStyle={{ height: 40, fill: this.state.colors.secondary }}
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
                  href={this.state.navlinks[0].href}
                >
                  {this.state.navlinks[0].link}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="pix-white pix-nav-link"
                  href={this.state.navlinks[1].href}
                >
                  {this.state.navlinks[1].link}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="pix-white pix-nav-link" href="/contacts/">
                  {this.state.navlinks[2].link}
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
      </header>
    );
  }
}

export default NavigationBar;
