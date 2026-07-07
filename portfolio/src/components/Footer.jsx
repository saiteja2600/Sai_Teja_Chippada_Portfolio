import { Component } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="max-container footer__container">

          {/* Left Side */}

          <div className="footer__left">

            <h2 className="footer__name">
              Sai Teja <span>Chippada</span>
            </h2>

            <p className="footer__tagline">
              Software Engineer | Full Stack Developer |
              Data Engineer | Data Science
            </p>

            <div className="footer__social">

              <a
                href="https://github.com/saiteja2600?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sai-teja-chippada-33bb9b216/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:saiteja_ch@outlook.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="footer__copyright">
              © {new Date().getFullYear()} Sai Teja Chippada.
              All Rights Reserved.
            </p>

          </div>

          {/* Right Side */}

          <div className="footer__right">

            <h3 className="footer__title">
              Contact
            </h3>

            <div className="footer__details">

              <p>
                <strong>Email :</strong>
                saiteja_ch@outlook.com
              </p>

              <p>
                <strong>Phone :</strong>
                +91 8074210793
              </p>

              <p>
                <strong>Location :</strong>
                Hyderabad, Telangana, India
              </p>

            </div>

          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;