import { Button, Input, Link, VStack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <VStack bgColor="gray.100" w="100%" h="100vh" justifyContent="center" >
      <VStack py="3rem" px="2rem" mb="1rem" bgColor="white" border="1px solid gray" spacing="1.5rem" w="20%">
        <Input type="text" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Button colorScheme="blue">Log In</Button>
      </VStack>
      <Link as={NavLink} to="/"><ArrowBackIcon mx="2"/>Go to NodeBlog</Link>
    </VStack>
  )
}
