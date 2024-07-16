import { Box, chakra, Container, Stack, Text } from "@chakra-ui/react";

export const ContainerIntro = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="2xl">
      <Box
        // bgGradient={'linear(to-r, #78FFD6, #A8FF78)'}
        bg="bg-surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text
              fontSize={"20px"}
              textTransform={"uppercase"}
              fontWeight="400"
            >
              Unified Trust Framework
            </Text>
            <Text fontSize={"14px"} fontFamily={"accent"} color="muted">
              <chakra.span>
                We&apos;re engineering a trust infrastructure for the <b>onchain</b>
                economy. To start, we are building the Stellar Attestation
                Service (SAS), a framework that leverages
                Soroban smart contracts to provide secure and transparent attestations to
                digital interactions on the Stellar network.
              </chakra.span>
              <chakra.span display={{ base: "none", md: "inline" }}>
                <br />
                <br />
                This robust structure ensures transparency, security, and
                interoperability, enabling developers to seamlessly integrate
                reliable attestation mechanisms into their applications.
              </chakra.span>

              <br />
              <br />

              <chakra.span display={{ base: "none", md: "inline" }}>
                If this excites you, we&apos;d love to work with you. —{" "}
                <chakra.a textDecoration={"underline"} href="#">
                  Andrew
                </chakra.a>
                ,{" "}
                <chakra.a textDecoration={"underline"} href="#">
                  Mahine
                </chakra.a>{" "}
                ,{" "}
                <chakra.a textDecoration={"underline"} href="#">
                  Cyndie
                </chakra.a>{" "}
                and the entire{" "}
                <chakra.a textDecoration={"underline"} href="#">
                  Daccred team
                </chakra.a>
              </chakra.span>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
);
