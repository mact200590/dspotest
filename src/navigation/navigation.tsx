import React from "react";
import { Route, Routes } from "react-router-dom";
import FriendsPage from "../pages/FriendsPage";
import DetailFriendPage from "../pages/DetailFriendPage";

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<FriendsPage />} />
    <Route path="/friends/id" element={<DetailFriendPage />} />
  </Routes>
);

export default RoutesApp;
