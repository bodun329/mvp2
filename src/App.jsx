import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import Favorites from "./pages/Favorites";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/pokemon/:name" element={<PokemonDetail />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;