import { Box } from "@chakra-ui/react";
import React from "react";
import TestimonyCard from "./TestimonyCard";

const Testimony = () => {
  const testimonies = [
    {
      imageSrc: "URL_image_1",
      name: "Bron Lee",
      advice: "This is a good restaurant.",
    },
    {
      imageSrc: "URL_image_2",
      name: "Jane Doe",
      advice:
        "I had the best experience here! The service was excellent and the food was amazing!",
    },
    {
      imageSrc: "https://via.placeholder.com/300x300?text=User+Image",
      name: "Jane Smith",
      advice: "I would definitely recommend this place to friends and family.",
    },
    // ... Ajoutez d'autres témoignages si nécessaire
  ];

  return (
    <article className="Testimony">
      <h1>Testimonies</h1>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
        ml={10}
      >
        {testimonies.map((testimony, index) => (
          <TestimonyCard
            key={index}
            imageSrc={testimony.imageSrc}
            name={testimony.name}
            advice={testimony.advice}
          />
        ))}
      </Box>
    </article>
  );
};

export default Testimony;
