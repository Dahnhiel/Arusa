import "./App.css";
import Header from "./header.jsx";
import HeroImg1 from "../public/HeroImg1.png";
import img1 from "../public/img4.jpg";
import img2 from "../public/img5.png";
import img3 from "../public/img6.jpg";
import img4 from "../public/img7.webp";
import img5 from "../public/img8.webp";
import img6 from "../public/img10.jpg";
import img7 from "../public/img11.png";
import product1 from "../public/productsImg/product1.png";
import product2 from "../public/productsImg/product2.png";
import product3 from "../public/productsImg/product3.png";
import product4 from "../public/productsImg/product4.png";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <section className="heroo">
          <img src={HeroImg1} alt="" />
          <div className="Hero-text text-center">
            <h1
              className="text-white"
              style={{ fontFamily: "sans-serif", fontSize: "5rem" }}
            >
              Seamless Furniture <br /> With Natural Fabric
            </h1>
            <button
              className="btn"
              style={{ background: "linen", width: "137px", height: "30" }}
            >
              Shop Now
            </button>
            <img src={img6} alt="" />
          </div>
        </section>
        <section className="py-5">
          <div className="row justify-content-center align-items-center">
            {/* Left-side Images */}
            <div
              className="col-lg-3 col-md-6 d-flex flex-column align-items-center gap-4"
              style={{ marginTop: "3rem", gap: "70px" }}
            >
              <img
                src={img2}
                alt="Room 1"
                className="img-fluid"
                style={{ width: "234px", height: "184px" }}
              />
              <img
                src={img3}
                alt="Room 2"
                className="img-fluid"
                style={{ width: "419px", height: "290px" }}
              />
            </div>

            {/* Center Content */}
            <div className="col-lg-6 text-center">
              <img
                src={img1}
                alt="Main Room"
                className="img-fluid mb-4"
                style={{ width: "332px", height: "259px" }}
              />
              <h1 className="display-5 fw-bold mb-3">
                Creating <em>Perfect</em> <br /> lines and imposing <br />{" "}
                presence
              </h1>
              <p className="text-muted">
                Developed the concept of exclusivity, Arusa features timeless
                furniture with natural fabrics, curved lines, plenty of mirrors,
                and classic design, which can be incorporated into any decor
                project. The pieces enchant for their sobriety, to last for
                generations, faithful to the shapes of each period, with a touch
                of the present.
              </p>
              <button className="btn btn-outline-dark rounded-pill mt-4 px-5 py-2">
                Read About Us
              </button>
            </div>

            {/* Right-side Images */}
            <div
              className="col-lg-3 col-md-6 d-flex flex-column"
              style={{ marginTop: "8rem", gap: "70px" }}
            >
              <img
                src={img4}
                alt="Room 3"
                className="img-fluid ms-auto"
                style={{ width: "200px", height: "210px" }}
              />
              <img
                src={img5}
                alt="Room 4"
                className="img-fluid"
                style={{ width: "355px", height: "285px" }}
              />
            </div>
          </div>
          <div className="row container d-flex justify-content-center">
            <div className="col-12 d-flex justify-content-end w-50">
              <img
                src={img6}
                alt=""
                className="img-fluid"
                style={{ width: "172px", height: "132px" }}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <hr style={{ color: "teal" }} />
            <h1 className="text-center" style={{ fontFamily: "serif" }}>
              Enjoy our feature product
            </h1>
            <hr />

            <div className="container-fluid d-flex flex-row justify-content-between">
              <img
                src={product1}
                alt=""
                className="card-img"
                style={{ width: "330px", height: "355px" }}
              />
              <img
                src={product2}
                alt=""
                className="card-img"
                style={{ width: "330px", height: "355px" }}
              />
              <img
                src={product3}
                alt=""
                className="card-img"
                style={{ width: "330px", height: "355px" }}
              />
              <img
                src={product4}
                alt=""
                className="card-img"
                style={{ width: "330px", height: "355px" }}
              />
            </div>
            <hr />
            <a href="#" className="nav-link">
              <h3
                className="text-center fw-100"
                style={{ fontFamily: "monospace", fontSize: "16px" }}
              >
                SHOP ALL
              </h3>
            </a>
            <hr />
          </div>
        </section>
        <section>
          <div className="d-flex flex-row">
            <div
              className="bg-secondary w-50 text-light d-flex flex-column text-center justify-content-center"
              style={{ fontFamily: "serif" }}
            >
              <div>
                
              </div>
            </div>
            <img src={img7} alt="" style={{ width: "720px", height: "" }} />
          </div>
        </section>
      </main>
      <footer>
        <p>�� 2022 Arusa. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
