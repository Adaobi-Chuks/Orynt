import {
    Box,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function Landing() {
    return (
        <Box>
            <Hero />
            <Features />
            <CallToAction />
            <Footer />
        </Box>
    );
}
