import logo from "../assets/logo.webp";

import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "../SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
