import {
  Routes,
  Route
} from "react-router-dom";
import App from "../App";
import Splash from "../pages/Splash";
import Feed from "../pages/Feed";
import React from "react";
import Article from "../pages/Article";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authors from "../pages/Authors";


function AppStack() {
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Splash/>}/>
        <Route path="feed" element={<Feed/>}/>
        <Route path="review/:reviewId" element={<Article/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        {/* <Route path="Authors" element={<Authors/>}/> */}
        <Route path="authors/:authorsId" element={<Authors/>}/>
      </Route>
    </Routes>
  )
}

export default AppStack;
