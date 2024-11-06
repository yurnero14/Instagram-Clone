import { Avatar } from "@/components/ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w="full">
      <Flex alignItems={"center"} gap={2}>
        <Avatar size="sm" name="Adaline Bowman" src="/adaline.png" />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          AdalineBowman
          <Box color={"gray.500"}>• 3d</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
