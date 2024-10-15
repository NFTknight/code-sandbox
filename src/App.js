import React from "react";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebEditor />} />
        <Route path="/markdown" element={<MarkdownEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
