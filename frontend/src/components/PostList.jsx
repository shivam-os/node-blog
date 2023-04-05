import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { PostsContext } from "../Context";
import PostCard from "./PostCard";

export default function PostList() {
  const { posts } = useContext(PostsContext);

  return (
    <VStack spacing="10" w="70%" border="2px solid black">
      {posts.map((item) => {
        return <PostCard key={item._id} title={item.title} author={item.author.name} category={item.category.name} featuredImage={item.featuredImage.url} updatedAt={item.createdAt} content={item.content} />;
      })}
    </VStack>
  );
}
