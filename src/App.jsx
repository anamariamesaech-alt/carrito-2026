import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Articulos from "./pages/Articulos"
import PropsPage from "./pages/PropsPage"

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/props" element={<PropsPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
