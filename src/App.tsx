import { Box, HStack as Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameHeading from "./GameHeading";
import SortSelector from "./SortSelector";
import { GameGrid } from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { NavBar } from "./component/NavBar";
import PlatformSelector from "./component/PlatformSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelecteGenreId={(genreId) =>
              setGameQuery({ ...gameQuery, genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginLeft={1}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onselectePlatform={(platformId) =>
                  setGameQuery({ ...gameQuery, platformId })
                }
              />
            </Box>
            <Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
