import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Carrito de Compras
        </Link>

        <div className="ms-auto">
          <Link className="nav-link d-inline text-white me-3" to="/">
            Inicio
          </Link>
          <Link className="nav-link d-inline text-white me-3" to="/articulos">
            Artículos
          </Link>
          <Link className="nav-link d-inline text-white" to="/props">
            Props
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar