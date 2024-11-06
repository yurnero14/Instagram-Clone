import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../../comps/FeedPosts/FeedPosts";
export const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};
