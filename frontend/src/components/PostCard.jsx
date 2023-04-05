import {
  Card,
  CardBody,
  VStack,
  Heading,
  Text,
  CardFooter,
  Button,
  HStack,
  Image,
  Stack
} from "@chakra-ui/react";

export default function PostCard(props) {
  const { title, author, featuredImage, category, content, updatedAt } = props;
  const summary = content.slice(0,150)

  return (
    <Card w="100%" direction="row">
      <Image objectFit="cover" maxW="200px" src={featuredImage} alt={title}/>
      <Stack>
      <CardBody>
        <VStack alignItems="flex-start">
          <Heading>{title}</Heading>
          <HStack>
            <Text>{category}</Text>
            <Text>By {author}</Text>
            <Text>On {updatedAt}</Text>
          </HStack>
          <Text pt="1">{summary}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Read More</Button>
      </CardFooter>
      </Stack>
    </Card>
  );
}
