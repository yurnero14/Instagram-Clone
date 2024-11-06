import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box mt={3}>
        <Image src="/adaline.png" alt="adaline pic" />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;
