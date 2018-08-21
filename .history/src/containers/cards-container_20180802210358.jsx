import React from "react";
import CardsHeading from "../components/cards-heading";
import Card from "../components/card";
const CardsContainer = props => {
  const convert = require("color-convert");
  // console.log(props);
  const cardsContent = props.content.cards;
  const cardsList = cardsContent.map((element, i) => {
    const hex2RgbColor = color => convert.hex.rgb(color);
    element.tagColor = hex2RgbColor(element.color);
    return (
      <Card
        key={i}
        color={element.color}
        heading={element.heading}
        text={element.text}
        tag="Tips"
        tagColor={element.tagColor}
        colors={props.colors}
      />
    );
  });
  return (
    <section
      className="pix_section pix-darkblue-transparent"
      style={{
        paddingTop: 85,
        paddingBottom: 85,
        backgroundColor: `rgba(${props.colors.secondaryRgb}, ${
          props.colors.opacity
        })`
      }}
    >
      <div className="container">
        <div className="row">
          <CardsHeading
            heading={props.content.heading}
            subheading={props.content.subheading}
            colors={props.colors}
          />
          {cardsList}
        </div>
      </div>
    </section>
  );
};
export default CardsContainer;
