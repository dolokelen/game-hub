import { Heading } from "@chakra-ui/react";
import { GameQuery } from "./App";
import useGenres from "./hooks/useGenres";
import usePlatform from "./hooks/usePlatform";
import { useFindPlatform } from "./hooks/useFindPlatform";
import useFindGenre from "./hooks/useFindGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = useFindPlatform(gameQuery.platformId);
  const genre = useFindGenre(gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
