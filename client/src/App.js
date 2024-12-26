import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider wave={{ disabled: true }}>
      <div className="App">
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element= {<HomePage />} />
              <Route path='/login' element= {<Login />} />
              <Route path='/register' element= {<Register />} />
            </Routes>
          </BrowserRouter>
        </>
      </div>
    </ConfigProvider>
  );
}

export default App;
