import {
    Box,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import Features from "../components/features";
import Footer from "../components/footer";
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
