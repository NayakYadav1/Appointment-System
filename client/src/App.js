import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <ConfigProvider wave={{ disabled: true }}>
      <>
        <BrowserRouter>
          {loading ? (
            <Spinner />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          )}
        </BrowserRouter>
      </>
    </ConfigProvider>
  );
}

export default App;
