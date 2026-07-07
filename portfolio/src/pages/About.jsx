import { Component } from "react";
import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCloud,
  FaLaptopCode,
  FaProjectDiagram,
  FaUserGraduate,
} from "react-icons/fa";

import Profile from "../assets/images/SVC-531.jpg";

class About extends Component {
  render() {
    return (
      <section className="about">

        <div className="max-container">

          {/* Heading */}

          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2>
              About <span>Me</span>
            </h2>

            <p>
              Passionate Software Engineer with experience in
              Full Stack Development and Azure Data Engineering.
            </p>

          </motion.div>

          {/* About Content */}

          <div className="about-content">

            {/* Profile */}

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <img
                src={Profile}
                alt="Sai Teja Chippada"
              />

            </motion.div>

            {/* About */}

            <motion.div
              className="about-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h3>
                Sai Teja <span>Chippada</span>
              </h3>

              <h4>
                Software Engineer | Full Stack Developer |
                Azure Data Engineer
              </h4>

              <p>
                I am a Software Engineer with 1.5+ years of
                professional experience in designing and developing
                enterprise applications using React.js, Python,
                PostgreSQL and modern web technologies.
              </p>

              <p>
                During my professional career I worked on enterprise
                software solutions including ERP systems for
                educational institutions and Laboratory Information
                Management Systems (LIMS) & Electronic Laboratory
                Notebook (ELN) applications for pharmaceutical
                organizations.
              </p>

              <p>
                To strengthen my technical expertise, I transitioned
                into Azure Data Engineering and built projects using
                Azure Data Factory, Azure Databricks, PySpark,
                Azure SQL Database and Delta Lake while following
                modern ETL architecture and cloud best practices.
              </p>

            </motion.div>

          </div>



          {/* Education */}

          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h2>
              Education
            </h2>

            <div className="education-container">

              {/* MSc */}

              <div className="education-card">

                <div className="education-icon">

                  <FaUserGraduate />

                </div>

                <div className="education-content">

                  <h3>
                    Master of Science (M.Sc)
                  </h3>

                  <h4>
                    Data Science
                  </h4>

                  <p>
                    GITAM (Deemed to be University)
                  </p>

                  <span>
                    Visakhapatnam • 2021 – 2023
                  </span>

                </div>

              </div>

              {/* BSc */}

              <div className="education-card">

                <div className="education-icon">

                  <FaUserGraduate />

                </div>

                <div className="education-content">

                  <h3>
                    Bachelor of Science (B.Sc)
                  </h3>

                  <h4>
                    Mathematics, Chemistry &
                    Computer Science (MCCS)
                  </h4>

                  <p>
                    ABN & PRR College of Science
                  </p>

                  <span>
                    Rajahmundry • 2017 – 2020
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
    );
  }
}

export default About;