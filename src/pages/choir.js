import * as React from "react";
import { Box, Typography, Container } from "@mui/material";

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import Seo from "../components/seo";
import { CHOIR_CONTENT } from "../constants/content/choir";

const ChoirContent = ({ language }) => {
    return (
        <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", pt: 15, pb: 5 }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" color="text.secondary">
                    {CHOIR_CONTENT[language].comingSoon}
                </Typography>
            </Box>
        </Container>
    );
};

export const Head = () => <Seo title="Choir" />;

const Choir = () => {
    return (
        <Layout>
            <ChoirContent />
            <Footer />
        </Layout>
    );
};

export default Choir;
