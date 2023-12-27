import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <HStack spacing={3}>
        <Box
          backgroundColor="#EDEFEE"
          textColor="black"
          height={550}
          rounded="3xl"
          paddingBottom={5}
        >
          <VStack spacing={3}>
            <Image
              src={imageSrc}
              alt={title}
              rounded="3xl"
              width={"100%"}
              height={300}
              objectFit="cover"
            />
            <Box paddingX={4}>
              <Heading paddingY={3} size="md">
                {title}
              </Heading>
              <Text>{description}</Text>
              <HStack spacing={2}>
                <Text fontWeight="bold">Order a delivery</Text>
                <FontAwesomeIcon icon={faArrowRight} />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;
