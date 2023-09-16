import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { useFindPlatform } from "../hooks/useFindPlatform";

interface Props {
  onselectePlatform: (platform: number) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onselectePlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = useFindPlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onselectePlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
