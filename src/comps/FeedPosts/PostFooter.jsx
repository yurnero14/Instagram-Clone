import {
  Box,
  Button,
  Flex,
  Group,
  Input,
  InputAddon,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/icons";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(2);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      <Text fontSize={"sm"} fontWeight={700}>
        farmerboysarib
        <Text as={"span"} fontWeight={400} ml={1}>
          Salaam
        </Text>
      </Text>
      <Text fontSize="sm" color={"gray"}>
        View all 3 comments
      </Text>
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <Group attached>
          <Input
            variant={"flushed"}
            placeholder="Add a comment..."
            fontSize={14}
            mb={4}
          />
          <InputAddon mb={4}>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputAddon>
        </Group>
      </Flex>
    </>
  );
};

export default PostFooter;
