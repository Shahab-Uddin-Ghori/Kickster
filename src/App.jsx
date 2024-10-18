import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Userlayout from "./components/Userlayout";
import Login from "./utils/auth/Login";
import Signup from "./utils/auth/Signup";
import SideBar from "./components/SideBar";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  */}

        {/* User Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Userlayout />} />
        </Route>
        {/*  */}

        {/* auth */}
        <Route path="/auth" element={<Outlet />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
        {/*  */}

        {/* AdminLayout */}
        <Route
          path="/admin"
          element={
            <>
              <SideBar />
              <Outlet />
            </>
          }
        >
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
        {/*  */}

        {/*  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
