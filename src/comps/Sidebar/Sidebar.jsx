import { Box, Flex, Link } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { Avatar } from "@/components/ui/avatar";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/icons";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const sidebarItems = [
    { icon: <AiFillHome size={25} />, text: "Home", link: "/" },
    { icon: <SearchLogo />, text: "Search" },
    { icon: <NotificationsLogo />, text: "Notifications" },
    { icon: <CreatePostLogo />, text: "Create" },
    { icon: <Avatar size="sm" name="FarmerBoy" src="/farmerboy.png" width = "25px" height="25px"/>, text: "Profile", link: "/farmer" },
  ];

  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position="sticky"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      {/* Logo section */}
      <Flex mb={8}>
        <Link
          to="/"
          as={RouterLink}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to="/"
          as={RouterLink}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          ml={2}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>

      {/* Sidebar Items with Tooltips */}
      <Flex direction="column" gap={5} align="flex-start">
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            label={item.text} // Tooltip text
            hasArrow
            placement="right"
            openDelay={500} // Delay before tooltip shows
          >
            <Link
              as={RouterLink}
              to={item.link || "#"}
              display="flex"
              alignItems="center"
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              {item.icon}
              {/* Display text only on larger screens */}
              <Box display={{ base: "none", md: "block" }} ml={4}>
                {item.text}
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
