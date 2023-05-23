/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuth } from "./store/user";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Scholarships from "./pages/Scholarships";
import Message from "./pages/Message";
import Network from "./pages/Network";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const App = ({ store }) => {
  const user = useSelector(getUserAuth());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {});

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Routes>
      <Route path="/not-found" element={<NotFound />} />

      {user ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Login />} />
      )}

      <Route path="/" element={<Navigate to="/not-found" replace />} />

      <Route path="/Network" element={<Network />} />
      <Route path="/Scholarships" element={<Scholarships />} />
      <Route path="/Message" element={<Message />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default App;
