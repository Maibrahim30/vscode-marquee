import {
  Flex,
  Box,
  Heading,
  Image,
  Link,
  Icon,
  useColorMode,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";

import { MAIN_COLOR, HERO_BG_COLOR } from "../constants";

export const Sunset = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={HERO_BG_COLOR[colorMode]}
      alignItems="center"
      flexDirection={"column"}
      w={"full"}
      py={12}
    >
      <Flex
        bgGradient={`linear(to-l, #7928CA, ${MAIN_COLOR})`}
        bgClip="text"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          as="h1"
          mr={{ base: 2, sm: 4, md: 10 }}
          fontSize={{ base: "3em", sm: "5em", md: "7em" }}
        >
          Marquee is sunsetting
        </Heading>
        <Image
          src="/assets/marquee-logo.png"
          width={{ base: 55, sm: 75, md: 150 }}
          height={{ base: 45, sm: 75, md: 125 }}
          alt="Marquee"
        />
      </Flex>
      <Flex
        display={{ base: "flex", sm: "flex" }}
        align={"center"}
        flexFlow={{ base: "wrap", sm: "nowrap" }}
        justifyContent={"center"}
        flexDirection={"row"}
      >
        <Text
          display={{ base: "block", sm: "block" }}
          fontSize={"8em"}
          my={3}
          textAlign={"center"}
        >
          🫶
        </Text>
      </Flex>
      <Box my={6} maxWidth={"1200px"}>
        <Heading
          as="h2"
          fontSize={{ base: "1.2em", md: "1.8em" }}
          textAlign={"center"}
          mx={5}
          mb={{ base: 5, sm: 0 }}
        >
          Unfortunately, after a fantastic run, we have decided to sunset the
          Marquee project.
        </Heading>
        <Text
          display={{ base: "block", sm: "block" }}
          fontSize={{ base: "1em", md: "1.2em" }}
          my={3}
          textAlign={"center"}
        >
          If you have any feedback or suggestions, please feel free to reach out
          to us at{" "}
          <Link
            href="mailto:info@stateful.com"
            color={useColorModeValue("blue.500", "blue.300")}
            textDecoration="underline"
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("blue.600", "blue.200"),
            }}
          >
            info@stateful.com
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  );
};
