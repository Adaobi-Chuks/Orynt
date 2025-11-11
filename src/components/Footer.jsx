import { Box, Flex, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
    return (
        <Box py={10} bg="gray.900" color="gray.400">
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                maxW="6xl"
                mx="auto"
                px={[4, 6, 8]}
            >
                {/* Left: Copyright */}
                <Text fontSize="sm" mb={{ base: 4, md: 0 }}>
                    © {new Date().getFullYear()} Orynt. Powered by x402.
                </Text>

                {/* Right: Socials */}
                <Stack direction="row" spacing={6}>
                    <Link color="grey" href="https://github.com/yourhandle" isExternal _hover={{ color: "white" }}>
                        <Icon as={FaGithub} boxSize={5} />
                    </Link>
                    <Link color="grey" href="https://twitter.com/yourhandle" isExternal _hover={{ color: "white" }}>
                        <Icon as={FaTwitter} boxSize={5} />
                    </Link>
                    <Link color="grey" href="https://linkedin.com/company/yourcompany" isExternal _hover={{ color: "white" }}>
                        <Icon as={FaTelegram} boxSize={5} />
                    </Link>
                </Stack>
            </Flex>
        </Box>
    );
}
