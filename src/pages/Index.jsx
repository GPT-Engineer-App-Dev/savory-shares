import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    title: "Chicken Tikka Masala",
    image: "https://via.placeholder.com/150",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
  },
  {
    title: "Beef Stroganoff",
    image: "https://via.placeholder.com/150",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes!</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <LinkBox as="article" key={index} p="5" borderWidth="1px" rounded="md">
              <Box>
                <Image src={recipe.image} alt={recipe.title} borderRadius="md" />
                <Heading size="md" my="2">
                  <LinkOverlay href="#">{recipe.title}</LinkOverlay>
                </Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;