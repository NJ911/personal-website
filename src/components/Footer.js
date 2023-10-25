import { Center, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center flexDirection="column" paddingTop="3vh">
      <Text fontSize="smaller" as="b">
        Created by Udbhav Agarwal
      </Text>
      <Text fontSize="smaller" as="b">
        Last updated October 2022
      </Text>
    </Center>
  );
};

export default Footer;
