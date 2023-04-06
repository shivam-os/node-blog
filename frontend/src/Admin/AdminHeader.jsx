import { HStack, Heading, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  return (
    <HStack
      bgColor="gray.800"
      color="white"
      width="100%"
      justifyContent="space-between"
      py="2"
      px="5"
      fontSize="lg"
    >
      <HStack spacing="1rem">
        <Heading>NodeBlog</Heading>
        <Text fontSize="xl">Hi, Shivam</Text>
      </HStack>
      <HStack spacing="1.5rem">
        <Link as={NavLink} to="/admin/posts">
          Posts
        </Link>
        <Link as={NavLink} to="/admin/categories">
          Categories
        </Link>
        <Link as={NavLink} to="/admin/comments">
          Comments
        </Link>
      </HStack>
    </HStack>
  );
}
