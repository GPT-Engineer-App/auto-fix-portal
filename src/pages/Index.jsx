import React from "react";
import { Box, Container, VStack, HStack, Heading, Text, Button, IconButton, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaWrench, FaCar, FaOilCan } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" py={4}>
        <Heading as="h1" size="lg">
          Auto Repair Shop
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Call us" icon={<FaPhone />} size="lg" />
          <IconButton aria-label="Email us" icon={<FaEnvelope />} size="lg" />
        </HStack>
      </HStack>

      {/* Hero Section */}
      <Box bg="gray.100" p={8} borderRadius="md" textAlign="center">
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Quality Auto Repair Services
          </Heading>
          <Text fontSize="lg">We provide top-notch auto repair services to keep your vehicle running smoothly.</Text>
          <Button colorScheme="teal" size="lg">
            Get a Quote
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box py={8}>
        <Heading as="h3" size="lg" mb={4}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <VStack bg="gray.50" p={4} borderRadius="md" spacing={4}>
            <FaWrench size="3em" />
            <Heading as="h4" size="md">
              General Repair
            </Heading>
            <Text>We handle all types of general repairs to keep your vehicle in top condition.</Text>
          </VStack>
          <VStack bg="gray.50" p={4} borderRadius="md" spacing={4}>
            <FaCar size="3em" />
            <Heading as="h4" size="md">
              Engine Repair
            </Heading>
            <Text>Our experts can diagnose and repair any engine issues you may have.</Text>
          </VStack>
          <VStack bg="gray.50" p={4} borderRadius="md" spacing={4}>
            <FaOilCan size="3em" />
            <Heading as="h4" size="md">
              Oil Change
            </Heading>
            <Text>Regular oil changes are essential for the longevity of your vehicle.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" p={8} borderRadius="md" textAlign="center">
        <VStack spacing={4}>
          <Heading as="h3" size="lg">
            Contact Us
          </Heading>
          <Text fontSize="lg">Have any questions? Get in touch with us!</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Call us" icon={<FaPhone />} size="lg" />
            <IconButton aria-label="Email us" icon={<FaEnvelope />} size="lg" />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
