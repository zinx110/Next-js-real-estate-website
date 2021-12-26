import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import image from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"Yellow"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          >
            Unixa Real Estate
          </Text>
          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            Best Properties for Rent or Buying
          </Text>

          <a href="#properties">
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show Properties
            </Button>
          </a>
        </Stack>
      </VStack>
    </Flex>
  );
}
