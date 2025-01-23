import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostListPage from "./pages/PostListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post/category/:category" element={<PostListPage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
