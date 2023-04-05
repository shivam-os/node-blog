import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import { VStack, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { PostsContext } from "./Context";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("http://localhost:3005/api/posts/");
      const data = await result.json();
      setPosts(data.posts);
    };
    getPosts();
  }, []);

  return (
    <VStack width="100vw" border="2px solid black">
      <Header />
      <PostsContext.Provider value={{ posts }}>
        <HStack width="100%" alignItems="flex-start">
          <Routes>
            <Route path="/" element={<PostList />}/>
            <Route path="/posts/:id" element={<SinglePost />} />
          </Routes>
          <Sidebar/>
        </HStack>
      </PostsContext.Provider>
      <Footer />
    </VStack>
  );
}

export default App;
