import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { VStack, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { PostsContext } from "./Context";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import AdminHeader from "./Admin/AdminHeader";
import Categories from "./Admin/Categories";

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
    <VStack width="100vw">
      {/* <Routes>
        <Route
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes> */}
      {/* <PostsContext.Provider value={{ posts }}>
        <HStack width="100%" alignItems="flex-start">
          {/* <Routes>
            <Route path="/" element={<PostList />}/>
            <Route path="/posts/:id" element={<SinglePost />} />
          </Routes> */}
          {/* <Sidebar />
        </HStack>
      </PostsContext.Provider>
      <Footer /> */} */
      <AdminHeader />
      <Categories />
    </VStack>
  );
}

export default App;
