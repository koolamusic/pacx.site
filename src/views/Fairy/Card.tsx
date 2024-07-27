import { Box, Button, chakra, Container, Stack, Text } from '@chakra-ui/react'

// Define the mailTo variable with the desired subject and body
const mailTo = `mailto:gm@daccred.co?subject=Collaborate on Stellar Attestation Service&body=Hi,%0D%0AI love SAS and would like to collaborate with your team.`

export const ContainerIntro = () => (
  <Box as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="2xl">
      <Box
        // bgGradient={'linear(to-r, #78FFD6, #A8FF78)'}
        bg="black"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text fontSize={'20px'} textTransform={'uppercase'} fontWeight="400">
              Scratch for Cairo Smart Contracts
            </Text>
            <Text fontSize={'14px'} fontFamily={'accent'} color="muted">
              <chakra.span>
                At PACX, we're onboarding the next generation of crypto innovators, by creating a lego-like platform for Cairo smart contracts.
                Our platform revolutionizes the way Individuals of all skill levels engage with blockchain technology,
              </chakra.span>
              <chakra.span display={{ base: 'none', md: 'inline' }}>
                <br />
                <br />
                By reducing barriers and simplifying how smart contracts are created, we empower a global community of innovators to
                transform their ideas into impactful smart projects that inspire innovation, curiosity and creativity
              </chakra.span>

              <br />
              <br />

              <chakra.span>
                If this excites you, we&apos;d love to work with you. —{' '}
                <chakra.a textDecoration={'underline'} href={mailTo}>
                  Prince
                </chakra.a>
                ,{' '}
                <chakra.a textDecoration={'underline'} href={mailTo}>
                  Andrew
                </chakra.a>{' '}
                ,{' '}
                <chakra.a textDecoration={'underline'} href={mailTo}>
                  Cyndie
                </chakra.a>
                  {' '}
                  and 
                  {' '}
                <chakra.a textDecoration={'underline'} href={mailTo}>
                  Max 
                </chakra.a>
              </chakra.span>
            </Text>

            <Stack w={'max-content'} mt={3}>

            <Button
          as={'a'}
          variant={'outline'}
          size={'sm'}
          fontFamily={'heading'}
          textTransform={'uppercase'}
          target='_blank'
          rel='noreferrer noopener'
          href='https://hackmd.io/@princeibs/H10fCLKO0'
          zIndex={100000}
        >
          Learn More
        </Button>
        </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
