import { Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Books from "./pages/Books";

export default function App() {
  return (
    <div>
      <h1>This is the site header</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<p>This is the home route</p>} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}
