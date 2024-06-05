import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    title: "Chicken Tikka Masala",
    image: "/images/chicken-tikka-masala.jpg",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
  },
  {
    title: "Chocolate Cake",
    image: "/images/chocolate-cake.jpg",
    description: "A rich and moist chocolate cake perfect for dessert.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Recipe Sharing
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} boxSize="100%" objectFit="cover" />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {recipe.title}
                </Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;