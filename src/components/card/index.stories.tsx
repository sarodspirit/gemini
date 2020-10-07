import React from "react";
import Card from "./index";

export default {
  title: "Card",
  component: Card,
};

export const Default = (): React.ReactNode => {
  return (
    <Card>
      <Card.Title>Ali Akbar Khan</Card.Title>
      <Card.Body>
        <p>
          Ali Akbar Khan (14 April 1922 – 18 June 2009) was an Indian Hindustani
          classical musician of the Maihar gharana, known for his virtuosity in
          playing the sarod. Trained as a classical musician and instrumentalist
          by his father, Allauddin Khan, he also composed numerous classical
          ragas and film scores.
          </p>
      </Card.Body>
      <Card.Image src="https://static01.nyt.com/images/2009/06/20/arts/20khanspan.jpg?quality=90&auto=webp" />
    </Card>
  );
};
