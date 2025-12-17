import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/functionalComponents/Navbar";

// Main Pages
import Props from "./components/functionalComponents/Props";
import State from "./components/functionalComponents/State";
import Task from "./components/functionalComponents/Task";
import Event from "./components/functionalComponents/Event";
import Login from "./components/functionalComponents/Login";
import Signup from "./components/functionalComponents/Signup";
import About from "./components/functionalComponents/About";
import Home from "./components/functionalComponents/Home";
import Contact from "./components/functionalComponents/Contact";

// Hooks
import UseState from "./components/functionalComponents/Hooks/UseState";
import UseEffect from "./components/functionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalComponents/Hooks/UseEffectAPI";
import FakeImageAPI from "./components/functionalComponents/Hooks/FakeImageAPI";
import UseCallbackHook from "./components/functionalComponents/Hooks/UseCallback";
import UseRefHook from "./components/functionalComponents/Hooks/UseRef";
import UseMemoHook from "./components/functionalComponents/Hooks/UseMemo";
function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/task" element={<Task />} />
        <Route path="/events" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Hooks pages */}
        <Route path="/hooks/usestate" element={<UseState />} />
        <Route path="/hooks/useeffect" element={<UseEffect />} />
        <Route path="/hooks/useeffectapi" element={<UseEffectAPI />} />
        <Route path="/hooks/fakeimageapi" element={<FakeImageAPI />} />
        <Route path="/hooks/usecallback" element={<UseCallbackHook />} />
        <Route path="/hooks/useref" element={<UseRefHook />} />
        <Route path="/hooks/usememo" element={<UseMemoHook />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
