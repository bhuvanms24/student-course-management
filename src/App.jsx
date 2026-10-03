import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import AddStudent from "./pages/AddStudent";

import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;