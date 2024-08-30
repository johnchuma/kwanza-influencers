import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/homePage";
import Login from "./pages/loginPage";
import Report from "./pages/reportPage";
import ProfileUpdate from "./pages/profileUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
          <Route path="/profile" element={<ProfileUpdate />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
