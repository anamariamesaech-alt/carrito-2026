function Avatar({ name, image }) {
  return (
    <div className="card shadow-sm p-3">
      <img
        src={image}
        alt={name}
        className="img-fluid rounded-circle mb-3"
        style={{
          width: "180px",
          height: "180px",
          objectFit: "cover",
          margin: "0 auto"
        }}
      />
      <h5>{name}</h5>
    </div>
  )
}

export default Avatar