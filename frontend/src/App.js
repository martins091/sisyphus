import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { IoMenu, IoClose } from "react-icons/io5";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="flex">
        <div
          className={`lg:block fixed z-10 ${
            showSidebar ? "block" : "hidden"
          } bg-white lg:bg-transparent md:bg-white-300 sm:bg-white-300`}
        >
          <Sidebar />
        </div>

        <div className="flex-grow ml-0 lg:ml-80">
          <div className="lg:hidden fixed bottom-0 right-0 m-4">
            {showSidebar ? (
              <IoClose
                onClick={toggleSidebar}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <IoMenu
                onClick={toggleSidebar}
                className="text-3xl cursor-pointer"
              />
            )}
          </div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
