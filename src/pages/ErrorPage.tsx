import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../component/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={3}>
        <Heading>Oops...!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Page"
            : "An unexpected error has occoured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
