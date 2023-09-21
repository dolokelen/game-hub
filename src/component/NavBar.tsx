import logo from "../assets/logo.webp";

import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image boxSize="60px" src={logo} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
