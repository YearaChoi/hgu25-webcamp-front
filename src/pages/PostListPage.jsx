import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostListPage/PostList";
import HeaderDetail from "../components/HeaderDetail";

function PostListPage() {
  return (
    <div>
      <Header />
      <HeaderDetail />
      <PostList />
      <Footer />
    </div>
  );
}

export default PostListPage;
