import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                black: { value: "#0d0d0d" },
                white: { value: "#ffffff" },
                purple: { value: "#9F7AEA" },
                brand: {
                    dark: { value: "#0d0d0d" },  // dark background
                    gray: { value: "#1A1A1A" },   // lighter dark for gradients
                    purple: { value: "#9F7AEA" }, // accent purple
                },

            },
            fonts: {
                heading: { value: "'JetBrains Mono', monospace" },
                body: { value: "'Inter', sans-serif" },
            },
        },
        semanticTokens: {
            colors: {
                bg: { value: "{colors.black}" },
                text: { value: "{colors.white}" },
                accent: { value: "{colors.purple}" },
                headingGradientStart: { value: "{colors.brand.purple}" },
                headingGradientEnd: { value: "{colors.white}" },
            },
        },
        global: {
            body: {
                bg: "{colors.black}",
                color: "{colors.white}",
                fontFamily: "{fonts.body}",
            },
            heading: {
                color: "{colors.white}",
                fontFamily: "{fonts.heading}",
            },
        },
    },
});

const theme = createSystem(defaultConfig, config);

export default theme;
