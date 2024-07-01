import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddBlog from './component/Form/AddBlog';
import AllBlogs from './Pages/AllBlogs';
import MyBlogs from './Pages/MyBlogs';
import Navbar from './component/Navbar';
import Register from './component/Form/Register';
import Login from './component/Form/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const getToken = localStorage.getItem("Token");

  useEffect(() => {
    setIsLogin(!!getToken);
  }, [getToken]);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setIsLogin(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="App">
      {isLogin ? (
        <div>
          <Navbar Logout={handleLogout} />
          <Routes>
            <Route path="/" element={<AllBlogs />} />
            <Route path='/addblog' element={<AddBlog />} />
            <Route path='/myblogs' element={<MyBlogs />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path='/' element={<Login Login={handleLogin} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
