import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/homePage";
import MenuPage from "./pages/menuPage";
import Login from "./pages/loginPage";
import Report from "./pages/reportPage";
import ProfileUpdate from "./pages/profileUpdate";
import JobsPage from "./pages/jobsPage";
import PostPage from "./pages/postPage";
import PostsPage from "./pages/postsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
          <Route path="/profile" element={<ProfileUpdate />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/posts" element={<PostsPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
