import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/edit-student/:studentId" element={<EditStudent/>} />
        <Route path="/student-details/:studentId" element={<StudentDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
