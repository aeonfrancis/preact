import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { useState } from "preact/hooks";

export default function NavComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar
        expand={"md"}
        className="py-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.527)",
          position: "fixed",
          width: "100vw",
          zIndex: "3000",
        }}
      >
        <Container style={{ maxWidth: "1157px", height: "10.04vh" }} fluid>
          <Navbar.Brand href="#Home" style={{ height: "10vh" }}>
            <h2
              className="text-light"
              style={{
                textShadow: "3px 3px #8b952e",
                fontSize: "40px",
                paddingTop: "10px",
              }}
            >
              {" "}
              Portfo<span className="text-warning">lio.</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setShow(!show)}
            className="me-4"
            style={{
              backgroundColor: "rgb(128 128 128 / 19%)",
              color: "#4c4b4b",
            }}
            aria-controls={`offcanvasNavbar-expand-${"md"}`}
          />
          <Navbar.Offcanvas
            show={show}
            onHide={() => setShow(!show)}
            style={{ backgroundColor: "#212529", zIndex: "3005" }}
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              style={{
                borderBottom: "1px solid gray",
                paddingInline: "0",
                marginInline: "15px",
              }}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <h2
                  className="text-light pt-3 ps-4"
                  style={{ textShadow: "2px 2px #8b952e" }}
                >
                  {" "}
                  Portfo<span className="text-warning">lio.</span>
                </h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 pt-4 pb-0 ">
                <Nav.Link
                  className="ps-4"
                  href="#Home"
                  onClick={() => setTimeout(() => setShow(false), 700)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="ps-4"
                  href="#About_Me"
                  onClick={() => setTimeout(() => setShow(false), 700)}
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  className="ps-4"
                  href="#Skills"
                  onClick={() => setTimeout(() => setShow(false), 700)}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className="ps-4"
                  href="#Projects"
                  onClick={() => setTimeout(() => setShow(false), 700)}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  className="ps-4"
                  href="#Contacts"
                  onClick={() => setTimeout(() => setShow(false), 700)}
                >
                  Contacts
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
