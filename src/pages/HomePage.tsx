import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameHeading from "../GameHeading";
import SortSelector from "../SortSelector";
import { GameGrid } from "../component/GameGrid";
import GenreList from "../component/GenreList";
import PlatformSelector from "../component/PlatformSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginLeft={1}>
              <PlatformSelector />
            </Box>
            <Box>
              <SortSelector />
            </Box>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
