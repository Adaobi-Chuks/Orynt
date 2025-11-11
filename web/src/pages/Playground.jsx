import { useState } from "react";
import {
    Box,
    Container,
    Select,
    Textarea,
    Button,
    Stack,
    Text,
    Heading,
    Icon,
    Image,
} from "@chakra-ui/react";
import { FaKeyboard, FaImage, FaVolumeUp } from "react-icons/fa";

const models = ["OpenAI GPT", "Gradient", "Other AI Model"];

export default function Playground() {
    const [selectedModel, setSelectedModel] = useState(models[0]);
    const [mode, setMode] = useState("text");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRun = async () => {
        setLoading(true);
        setTimeout(() => {
            if (mode === "image") {
                setOutput(
                    <Image
                        src="https://via.placeholder.com/400x200?text=Generated+Image"
                        alt="Generated AI"
                        rounded="md"
                        w="full"
                    />
                );
            } else if (mode === "tts") {
                setOutput(
                    <audio controls>
                        <source
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            type="audio/mpeg"
                        />
                        Your browser does not support the audio element.
                    </audio>
                );
            } else {
                setOutput(`Output for "${input}" using ${selectedModel} (${mode})`);
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <Container maxW="5xl" py={16}>
            <Heading mb={6} textAlign="center">
                AI Playground
            </Heading>

            <Stack spacing={8}>
                {/* Model Selector */}
                <Box>
                    <Text mb={2}>Select AI Model:</Text>
                    <Select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                    >
                        {models.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </Select>
                </Box>

                {/* Mode Buttons defined individually */}
                <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                    <Button
                        leftIcon={<Icon as={FaKeyboard} w={5} h={5} />}
                        variant={mode === "text" ? "solid" : "outline"}
                        colorScheme={mode === "text" ? "purple" : "gray"}
                        onClick={() => setMode("text")}
                        size="lg"
                        w="full"
                    >
                        Text
                    </Button>

                    <Button
                        leftIcon={<Icon as={FaImage} w={5} h={5} />}
                        variant={mode === "image" ? "solid" : "outline"}
                        colorScheme={mode === "image" ? "purple" : "gray"}
                        onClick={() => setMode("image")}
                        size="lg"
                        w="full"
                    >
                        Image
                    </Button>

                    <Button
                        leftIcon={<Icon as={FaVolumeUp} w={5} h={5} />}
                        variant={mode === "tts" ? "solid" : "outline"}
                        colorScheme={mode === "tts" ? "purple" : "gray"}
                        onClick={() => setMode("tts")}
                        size="lg"
                        w="full"
                    >
                        Text-to-Speech
                    </Button>
                </Stack>

                {/* Input */}
                <Box>
                    <Text mb={2}>Enter Prompt / Command:</Text>
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your prompt here..."
                        size="lg"
                    />
                </Box>

                {/* Run Button */}
                <Button
                    colorScheme="purple"
                    size="lg"
                    onClick={handleRun}
                    isLoading={loading}
                    loadingText="Running..."
                >
                    Run
                </Button>

                {/* Output */}
                {output && (
                    <Box p={4} bg="gray.800" rounded="md" mt={4}>
                        <Text fontWeight="bold" mb={2}>
                            Output:
                        </Text>
                        <Box>{output}</Box>
                    </Box>
                )}
            </Stack>
        </Container>
    );
}
