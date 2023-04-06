import {
  VStack,
  HStack,
  Text,
  Input,
  Button,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 100, name: "javascript" },
    { id: 101, name: "python" },
    { id: 102, name: "linux" },
    { id: 104, name: "programming" },
  ]);

  const [categoryValue, setCategoryValue] = useState("");

  const [toggleEdit, setToggleEdit] = useState({
    text: "Add New Category",
    value: "",
    button: false,
  });

  const handleEditButton = (id) => {
    const text = categories.find((item) => item.id === id);
    console.log(text);
    setToggleEdit({
      text: "Update The Category",
      value: text.name,
      button: true,
    });
  };

  const handleCancelButton = () => {
    setToggleEdit({
      text: "Add New Category",
      value: "",
      button: false,
    });
  };

  return (
    <HStack width="100%" spacing="10rem" justifyContent="center">
      <VStack alignItems="flex-start">
        <Text>{toggleEdit.text}</Text>
        <Input type="text" placeContent="Name" value={toggleEdit.value} />
        {toggleEdit.button ? (
          <HStack>
            <Button colorScheme="blue" onClick={console.log("update")}>
              Update Category
            </Button>
            <Button
              variant="outline"
              onClick={handleCancelButton}
              colorScheme="blue"
            >
              Cancel
            </Button>
          </HStack>
        ) : (
          <Button colorScheme="blue">Add New Category</Button>
        )}
      </VStack>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th colSpan="2">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>
                    <Button
                      onClick={() => {
                        handleEditButton(item.id);
                      }}
                    >
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button>Delete</Button>
                  </Td>
                  <Td></Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </HStack>
  );
}
