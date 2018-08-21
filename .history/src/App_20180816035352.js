import React, { Component } from "react";
import convert from "color-convert";
import logo from "./assets/img/logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/pix_style.css";
import "./App.css";

import colors from "./content/colors.json";
import contacts from "./content/contacts.json";
import footerInfo from "./content/footer.json";
import NavigationBar from "./containers/nav-bar";
import FooterBlock from "./containers/footer";
import MainSection from "./containers/main-section";
const lang = {
  en: "en",
  de: "de",
  es: "es"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };
    const hex2RgbColor = color => convert.hex.rgb(color);
    colors.primaryRgb = hex2RgbColor(colors.primary);
    colors.secondaryRgb = hex2RgbColor(colors.secondary);
    colors.tertiaryRgb = hex2RgbColor(colors.tertiary);
    // console.log(colors);
  }

  render() {
    return (
      <BrowserRouter>
        <header className="navigation">
          <NavigationBar lang={lang} logo={logo} colors={colors} />
        </header>
        <MainSection contacts={contacts} colors={colors} lang={lang} />
        <FooterBlock
          lang={lang}
          info={footerInfo}
          contacts={contacts}
          logo={logo}
          colors={colors}
        />
      </BrowserRouter>
    );
  }
}

export default App;
