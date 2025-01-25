import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostListPage from "./pages/PostListPage";
import PostCreatePage from "./pages/PostCreatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post/create" element={<PostCreatePage />}></Route>
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/post/category/:category?" element={<PostListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
