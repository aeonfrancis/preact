import Git from "../assets/git.png";
import Insta from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Fb from "../assets/fb.png";
import Discord from "../assets/discord.png";

export default function FooterComponent() {
  return (
    <>
      <footer
        className="footer"
        style={{
          height: "25vh",
          display: "flex",
        }}
      >
        <div style={{ display: "flex", padding: "30px 10px 10px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                textDecoration: "underline",
                color: "#bebbbb",
                marginBottom: "5px",
              }}
            >
              Links
            </p>
            <a
              style={{ color: "#918d8d", textDecoration: "none" }}
              href="#home"
            >
              Home
            </a>
            <a
              style={{ color: "#918d8d", textDecoration: "none" }}
              href="#about_me"
            >
              About Me
            </a>
            <a
              style={{ color: "#918d8d", textDecoration: "none" }}
              href="#skills"
            >
              Skills
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px 10px 10px 80px",
            }}
          >
            <a
              style={{ color: "#918d8d", textDecoration: "none" }}
              href="#projects"
            >
              Projects
            </a>
            <a
              style={{ color: "#918d8d", textDecoration: "none" }}
              href="#contacts"
            >
              Contacts
            </a>
          </div>
        </div>
        <div style="margin-left: auto;">
          <a href="https://github.com/aeonfrancis" target="_blank">
            <img src={Git} alt="git logo" className="image" title="github" />
          </a>
          <a
            href="https://www.instagram.com/john.grae.100120/?target_user_id=49232959198&utm_source=instagram&utm_medium=email&utm_campaign=find_friend_activity_email&click_source=header_profile&__bp=1"
            target="_blank"
          >
            <img
              src={Insta}
              alt="instagram logo"
              className="image"
              title="instagram"
            />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img
              src={LinkedIn}
              alt="linkedin logo"
              className="image"
              title="linkedin"
            />
          </a>
          <a href="https://www.facebook.com/john.grae.100120/" target="_blank">
            <img src={Fb} alt="fb logo" className="image" title="facebook" />
          </a>
          <a
            href="https://discord.com/channels/1031419157645893653/1041538861043568641"
            target="_blank"
          >
            <img
              src={Discord}
              alt="discord logo"
              className="image"
              title="discord"
            />
          </a>
        </div>
      </footer>
      <div
        style={{
          backgroundColor: "rgb(97, 96, 96)",
          textAlign: "center",
          height: "33px",
        }}
      >
        <small style={{ color: "gainsboro", margin: "10px" }}>
          e-mail:&nbsp; rfranciscobscs@tfvc.edu.ph
        </small>
      </div>
    </>
  );
}
