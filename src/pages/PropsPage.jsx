import Avatar from "../components/Avatar"
import persona1 from "../assets/pers1.jpg"
import persona2 from "../assets/pers2.jpg"
import persona3 from "../assets/pers3.jpg"

function PropsPage() {
  return (
    <div className="container text-center mt-4">
      <h1 className="fw-bold">Props React</h1>

      <p className="mt-3">
        Este componente demuestra el uso de props en React.
      </p>

      <div className="row mt-5">
        <div className="col-md-4">
          <Avatar name="Katsuko Saruhashi" image={persona1} />
        </div>

        <div className="col-md-4">
          <Avatar name="Aklilu Lemma" image={persona2} />
        </div>

        <div className="col-md-4">
          <Avatar name="Lin Lanying" image={persona3} />
        </div>
      </div>
    </div>
  )
}

export default PropsPage