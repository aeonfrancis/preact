import { Container } from "react-bootstrap";
import NavComponent from "../components/Navbar";
import Self from "../assets/p1.png";

export default function HomeComponent() {
  return (
    <>
      <div className="home_cont" id="Home">
        <NavComponent />
        <img
          style={{ height: "90vh", float: "right", marginTop: "65px" }}
          src={Self}
          alt="Self image"
        />
        <Container>
          <div
            style={{
              position: "absolute",
              top: "200px",
              color: "beige",
              margin: "7% 10% 1%",
              zIndex: "2",
            }}
          >
            <br />
            <p style="font-size: 1.5rem;font-weight: 100;">Hello, my name is</p>
            <h1
              style={{
                fontSize: "3.5rem",
                fontFamily: "Trebuchet MS, sans-serif",
              }}
            >
              Reymundo Francisco&nbsp;
            </h1>
            <h3>
              And I'm a{" "}
              <span
                style={{
                  color: "orange",
                  borderRight: "4px solid orange",
                  marginTop: "15px",
                }}
              >
                DEV&nbsp;
              </span>
            </h3>
            <br />
            <a
              href="https://drive.google.com/file/d/1H-zoWiyPcAPmTB0DT3pIcZA3l9WvPP52/view?usp=share_link"
              target="_blank"
            >
              <button
                style={{ backgroundColor: "orange" }}
                type="button"
                className="btn text-light"
              >
                Download CV
              </button>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
