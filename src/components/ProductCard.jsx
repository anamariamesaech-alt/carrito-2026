function ProductCard({ title, price, category, image }) {
  return (
    <div className="col-12 col-md-6">
      <div className="card shadow-sm h-100 w-100">

        <img
          src={image}
          className="card-img-top w-100"
          style={{ height: "220px", objectFit: "cover" }}
          alt={title}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>

          <p className="text-muted mb-1">
            Categoría: {category}
          </p>

          <p className="fw-bold text-primary mt-auto">
            COP ${price.toLocaleString()}
          </p>

          <div className="d-flex justify-content-between mt-2">
            <button className="btn btn-outline-secondary btn-sm">
              Editar
            </button>

            <button className="btn btn-outline-danger btn-sm">
              Eliminar
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCard