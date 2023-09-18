import { Heading } from "@chakra-ui/react";
import useFindGenre from "./hooks/useFindGenre";
import { useFindPlatform } from "./hooks/useFindPlatform";
import useGameQueryStore from "./store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useFindGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useFindPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
