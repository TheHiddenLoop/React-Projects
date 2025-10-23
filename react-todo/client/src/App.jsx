import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import AddTodo from "./components/AddTodo";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { useTodoStore } from "./store/useTodoStore";
import { useEffect } from "react";
function App() {
  return (
    <div className="font-poppins h-screen bg-white">
      {/* <Navbar /> */}
        <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit/todo" element={<EditTodo />} />
          <Route path="/add/todo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
