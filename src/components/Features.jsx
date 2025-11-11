import {
    Box,
    Container,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { FaBolt, FaCode, FaWallet } from "react-icons/fa";

const features = [
    {
        title: "Instant AI Access",
        text: "Access powerful AI models through a single endpoint with no setup friction.",
        icon: FaBolt,
    },
    {
        title: "Pay Per Use",
        text: "Micropayments handled automatically using USDC via the X402 protocol.",
        icon: FaWallet,
    },
    {
        title: "SDK & API Ready",
        text: "Integrate easily with SDKs built for developers. Plug and play in minutes.",
        icon: FaCode,
    },
];

export default function Features() {
    return (
        <Box
            py={{ base: 20, md: 56 }}
            bg={["gray.900"]}
        >
            <Container
                maxW="6xl"
                padding={16}
                align="center"
                justify="center"
                textAlign="center"
            >
                <Stack textAlign="center" spacing={6} mb={16}>
                    <Heading
                        fontSize={["l", "2xl", "3xl", "4xl"]}
                        mb={[8, 10, 12]}
                        lineHeight={["short", "short", "shorter", "shorter"]}
                        bgGradient="to-br"
                        gradientFrom="brand.purple"
                        gradientTo="white"
                        bgClip="text"
                    >
                        Everything you need to build with AI
                    </Heading>
                    <Text
                        color={["gray.400"]}
                        fontSize={["md", "lg", "xl"]}
                        mb={[18, 24, 28]}
                    >
                        Simple, scalable, and developer-focused.
                        <br />
                        Launch faster with Orynt.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spaceX={[4, 6, 10]}>
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            p={8}
                            bg={["gray.800"]}
                            rounded="xl"
                            transition="all 0.5s ease"
                            _hover={{
                                transform: "translateY(6px)",
                                shadow: "xl",
                            }}
                        >
                            <Stack align="center" spacing={4} textAlign="center">
                                <Flex
                                    w={14}     // slightly larger
                                    h={14}
                                    align="center"
                                    justify="center"
                                    rounded="full"
                                    bg="brand.purple"
                                    color="white"
                                    mb={4}
                                >
                                    <Icon as={feature.icon} boxSize={7} lineHeight={1} />
                                </Flex>
                                <Heading fontSize="xl" mb={2}>
                                    {feature.title}
                                </Heading>
                                <Text color={["gray.200"]}>
                                    {feature.text}
                                </Text>
                            </Stack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
