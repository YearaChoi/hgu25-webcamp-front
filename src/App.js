import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostListPage from "./pages/PostListPage";
import PostCreatePage from "./pages/PostCreatePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post/create" element={<PostCreatePage />}></Route>
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/post/category/:categoryId?" element={<PostListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
