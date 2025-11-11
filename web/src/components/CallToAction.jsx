import { Flex, Heading, Text, Stack, Button } from "@chakra-ui/react";

export default function CallToAction() {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            py={{ base: 26, md: 56 }}
            px={6}
            bgGradient="linear(to-r, brand.purple, brand.dark)"
            textAlign="center"
            rounded="2xl"
            shadow="lg"
        >
            <Heading
                fontWeight="extrabold"
                fontSize={["l", "2xl", "3xl", "4xl"]}
                mb={[8, 10, 12]}
                lineHeight={["short", "short", "shorter", "shorter"]}
                bgGradient="to-br"
                gradientFrom="brand.purple"
                gradientTo="white"
                bgClip="text"
            >
                Build. Integrate. Monetize.
            </Heading>

            <Text
                mb={[18, 24, 28]}
                color="whiteAlpha.800"
                fontSize={{ base: "md", md: "lg" }}
                maxW="600px"
            >
                Orynt bridges AI and Web3.
                <br />
                Join the new wave of per-request monetization.
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} spaceX={[4, 6, 8]}>
                <Button
                    colorScheme="white"
                    bg="whiteAlpha.800"
                    color="black"
                    size="lg"
                    px="auto"
                    width={["28", "42", "56"]}
                    _hover={{
                        transform: "scale(1.05)",
                        color: "black",
                        bg: "purple"
                    }}
                    onClick={() => window.open("https://docs.oryntai.xyz", "_blank")}
                >
                    Try it out
                </Button>

                <Button
                    variant="outline"
                    borderColor="whiteAlpha.800"
                    color="white"
                    size="lg"
                    px="auto"
                    width={["28", "42", "56"]}
                    _hover={{
                        color: "whiteAlpha",
                        bg: "purple"
                    }}
                    onClick={() => window.open("https://docs.oryntai.xyz", "_blank")}
                >
                    Learn More
                </Button>
            </Stack>
        </Flex>
    );
}
