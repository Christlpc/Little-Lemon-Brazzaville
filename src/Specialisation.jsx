import React from "react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";

const plats = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("./Images/greek salad.jpg"),
  },
  {
    title: "Bruchetta  ",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    getImageSrc: () => require("./Images/brushetta.jpeg"),
  },
  {
    title: "Lemon cake",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("./Images/lemon dessert.jpg"),
  },
];

const Specialisation = () => {
  return (
    <>
      <div className="container-Spe">
        <div className="container-I">
          <div className="container-A">
            <h1 className="h1-Spe">This week specials !</h1>
          </div>
          <div>
            <button className="B-Hero">Online Menu</button>
          </div>
        </div>
        <div className="container-II">
          <div className="container-A">
            <Box
              display="grid"
              gridTemplateColumns="repeat(3,minmax(0,1fr))"
              gridGap={8}
            >
              {plats.map((plat) => (
                <Card
                  key={plat.title}
                  title={plat.title}
                  description={plat.description}
                  imageSrc={plat.getImageSrc()}
                />
              ))}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialisation;
