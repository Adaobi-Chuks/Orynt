import { Flex, Heading, Text, Stack, Button, Image, Box } from "@chakra-ui/react";
import LogoSrc from "../assets/logo.jpg"; // replace with your logo path
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <Flex
            direction="column"
            minH="100vh"
            bgGradient="to-b"
            gradientFrom="brand.dark"
            gradientTo="brand.grey"
            position="relative"
        >
            {/* Top nav */}
            <Flex
                w="100%"
                px={8}
                py={6}
                align="center"
                justify="space-between"
                position="absolute"
                top={0}
                left={0}
                zIndex={10}
            >
                {/* Logo */}
                <Box>
                    <Image src={LogoSrc} alt="Orynt Logo" h={14} />
                </Box>

                {/* Buttons */}
                <Stack direction="row" spacing={4}>
                    <Button
                        size="md"
                        variant="outline"
                        color="white"
                        borderColor="whiteAlpha.600"
                        _hover={{ bg: "whiteAlpha.200" }}
                    >
                        View Docs
                    </Button>
                    <Button
                        size="md"
                        colorScheme="purple"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        Try it out
                    </Button>
                </Stack>
            </Flex>

            {/* Hero content */}
            <Flex
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                flex="1"
                px={6}
            >
                <Heading
                    fontSize={["2xl", "4xl", "5xl", "6xl"]}
                    mb={[12, 16, 20]}
                    lineHeight={["short", "short", "shorter", "shorter"]}
                    bgGradient="to-br"
                    gradientFrom="brand.purple"
                    gradientTo="white"
                    bgClip="text"
                >
                    Your AI. Your Way.
                    <br />
                    Pay Only for What You Use.
                </Heading>

                <Text
                    fontSize={["md", "lg", "xl"]}
                    color="gray.400"
                    maxW="600px"
                    mb={[16, 18, 24]}
                >
                    Orynt lets you integrate any AI model seamlessly.
                    <br />
                    With built-in X402 USDC micropayments, you pay per request, no bulk subscriptions or API keys needed.                    <br />
                </Text>

                <Stack direction={["column", "row"]} spacing={[4, 6, 8]}>
                    <Button
                        size={["lg", "2xl", "4xl"]}
                        bg="transparent"
                        border="none"
                        color="white"
                        _hover={{ color: "black", bg: "white" }}
                    >
                        Get Started
                    </Button>

                    <Button
                        size={["lg", "2xl", "3xl"]}
                        variant="outline"
                        color="brand.purple"
                        borderColor="brand.purple"
                        _hover={{ bg: "brand.purple", color: "white" }}
                        onClick={() => navigate("/playground")}
                    >
                        Try it out
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    );
}
