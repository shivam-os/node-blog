import {HStack, Heading, Text} from "@chakra-ui/react"

export default function Header() {
  return (
    <HStack bgColor="blue.600" color="white" width="100%" justifyContent="space-between" py="2" px="5">
      <Heading>NodeBlog</Heading>
      <HStack>
        <Text>JavaScript</Text>
        <Text>Python</Text>
        <Text>Programming</Text>
      </HStack>
    </HStack>
  )
}
