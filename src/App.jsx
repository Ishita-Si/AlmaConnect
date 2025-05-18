import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AlumniList from "./pages/AlumniList";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={user ? <AlumniList /> : <Login onLogin={setUser} />} />
        <Route path="/profile/:email" element={<Profile user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
