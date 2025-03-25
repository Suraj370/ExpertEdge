import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/Not-Found";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import FindMentors from "./pages/FindMentors";
import Categories from "./pages/Categories";

function App() {

  return (
    <>
      <div className="min-h-screen  bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="mentors" element={<FindMentors />} />
          <Route path="category" element = {<Categories/>}/>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
