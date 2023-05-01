import { Container, Carousel } from "react-bootstrap";
import HangMan from "../assets/hang.png";
import BoardGame from "../assets/board.png";
import Quiz from "../assets/Q.png";
import Elog from "../assets/E-log.png";

export default function ProjectsComponent() {
  return (
    <>
      <div id="Projects"></div>
      <div style={{ height: "max-content", background: "rgb(95, 144, 95)" }}>
        <Container style={{paddingBottom: "35px"}}>
          <div className="page_title">
            <h1 className="title">My Projects</h1>
            <p className="title_sub">what i've created</p>
          </div>
          <hr className="line" />

          <Carousel
            style={{
              translate: "0px -10px",
              height: "65vh",
            }}
          >
            <Carousel.Item className="carousel-item">
              <a
                href="https://github.com/aeonfrancis/WORDLE_HANGMAN"
                target="_blank"
              >
                <img
                  className="d-block w-50 car_img"
                  src={HangMan}
                  alt="wordle/hangman"
                />
              </a>
              <Carousel.Caption className="carousel-caption">
                <h5 className="text_shadow">WORDLE with HANGMAN</h5>
                <p>Word guessing games with different mechanics.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <a
                href="https://github.com/aeonfrancis/Board-Game"
                target="_blank"
              >
                <img
                  className="d-block w-50 car_img"
                  src={BoardGame}
                  alt="board game"
                />
              </a>
              <Carousel.Caption className="carousel-caption">
                <h5 className="text_shadow">BOARD GAME</h5>
                <p>Fun strategic games played on board.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <a
                href="https://github.com/aeonfrancis/Quiz-Game"
                target="_blank"
              >
                <img
                  className="d-block w-50 car_img"
                  src={Quiz}
                  alt="quiz game"
                />
              </a>
              <Carousel.Caption className="carousel-caption">
                <h5 className="text_shadow">QUIZ GAME</h5>
                <p>Test your knowledge with interactive fun.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <a href="https://github.com/aeonfrancis/Capstone" target="_blank">
                <img
                  className="d-block w-50 car_img {
                    height: 50vh;
                    top: 0;
                    right: 25%;
                  }"
                  src={Elog}
                  alt="electronic logbook"
                />
              </a>
              <Carousel.Caption className="carousel-caption">
                <h5 className="text_shadow">Electronic Logbook</h5>
                <p>Digital record-keeping for efficient data management.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}
