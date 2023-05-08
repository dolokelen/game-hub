import logo from "../assets/logo.webp";

import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};
