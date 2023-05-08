import logo from "../assets/logo.webp";

import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};
