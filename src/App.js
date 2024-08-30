import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/mainLayout';
import HomePage from './pages/homePage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
