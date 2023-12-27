import React from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import Rating from "./Rating";

const TestimonyCard = ({ imageSrc, name, advice }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        className="Image-testimony"
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageSrc}
        alt="Testimony"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Text py="2">{advice}</Text>
        </CardBody>
        <CardFooter>
          <Rating />
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default TestimonyCard;
