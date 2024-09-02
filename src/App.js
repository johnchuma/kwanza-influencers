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
import AppLayout from "./layouts/appLayout";
import OtherLayout from "./layouts/otherLayout";
import CallPage from "./pages/callPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route></Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/profile" element={<ProfileUpdate />} />
          </Route>
          <Route path="/" element={<OtherLayout />}>
            <Route path="/report" element={<Report />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/support" element={<CallPage />} />
            <Route path="/posts/:id" element={<PostsPage />} />
          </Route>

          <Route path="/menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
