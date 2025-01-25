import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostListPage/PostList";

function PostListPage() {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}

export default PostListPage;
