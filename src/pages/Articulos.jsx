import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

function Articulos() {
  return (
    <div className="row">

      {/* IZQUIERDA */}
      <div className="col-lg-8">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Productos</h2>
          <span className="text-muted">
            Mostrando {products.length} productos
          </span>
        </div>

        <div className="row g-4">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* DERECHA */}
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            Agregar producto
          </div>

          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">
                  Nombre del producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: Auriculares Bluetooth"
                />
                <small className="text-muted">
                  Nombre visible en la tarjeta
                </small>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">
                    Precio (COP)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="159900"
                  />
                </div>

                <div className="col">
                  <label className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="10"
                  />
                </div>
              </div>

              <div className="mb-3 mt-3">
                <label className="form-label">
                  Categoría
                </label>
                <select className="form-select">
                  <option>Selecciona una categoría</option>
                  <option>Audio</option>
                  <option>Periféricos</option>
                  <option>Computación</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  URL de imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://..."
                />
                <small className="text-muted">
                  Opcional. Si no se define, usa una imagen por defecto.
                </small>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Detalles del producto..."
                />
              </div>

              <button className="btn btn-primary w-100">
                Agregar producto
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Articulos