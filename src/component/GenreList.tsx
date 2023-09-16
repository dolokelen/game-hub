import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  // onSelecteGenre: (genre: Genre) => void;
  onSelecteGenreId: (id: number) => void;
  // selectedGenre: Genre | null;
  selectedGenreId?: number;
}
const GenreList = ({ selectedGenreId, onSelecteGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  console.log("Genres:", data);

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                onClick={() => onSelecteGenreId(genre.id)}
                // onClick={() => onSelecteGenre(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                // fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
