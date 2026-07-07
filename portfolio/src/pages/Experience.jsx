import { Component } from "react";
import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaBuilding,
  FaFlask,
  FaUniversity,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

class Experience extends Component {
  render() {
    return (
      <section className="experience">

        <div className="max-container">

          {/* Header */}

          <motion.div
            className="experience-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2>
              Professional <span>Experience</span>
            </h2>

            <p>
              My professional journey as a Software Engineer,
              developing enterprise applications across Education
              and Pharmaceutical domains while transitioning into
              Azure Data Engineering.
            </p>

          </motion.div>

          <div className="timeline">

            {/* ================================
                    RAMANA SOFT
            ================================= */}

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
            >

              <div className="timeline-icon">
                <FaLaptopCode />
              </div>

              <div className="timeline-card">

                <div className="timeline-date">

                  <FaCalendarAlt />

                  <span>
                    Nov 2023 – Mar 2024
                  </span>

                </div>

                <h3>
                  Python Full Stack Developer Intern
                </h3>

                <h4>
                  Ramana Soft
                </h4>

                <p className="experience-domain">
                  ERP Management System for Educational Institutions
                </p>

                <div className="company-info">

                  <div>
                    <FaMapMarkerAlt />
                    Hyderabad
                  </div>

                  <div>
                    <FaBuilding />
                    11–50 Employees
                  </div>

                  <div>
                    <FaUniversity />
                    ERP Solutions
                  </div>

                </div>

                <ul>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        8+
                      </span>

                      <span>
                        Developed ERP modules including Student
                        Management, Faculty Management,
                        Attendance, Examination,
                        Fee Management and Administration.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        15+
                      </span>

                      <span>
                        Responsive web pages developed using
                        HTML, CSS, JavaScript,
                        Django and Bootstrap.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        CRUD
                      </span>

                      <span>
                        Implemented Create, Read,
                        Update and Delete operations
                        using Python, Django and MySQL.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        APIs
                      </span>

                      <span>
                        Integrated REST APIs and optimized
                        SQL queries to improve
                        application performance.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        Agile
                      </span>

                      <span>
                        Collaborated with senior developers
                        throughout development,
                        testing and deployment following
                        software engineering best practices.
                      </span>

                    </div>

                  </li>

                </ul>

              </div>

            </motion.div>
            {/* ================================
                  LAB ICONICS TECHNOLOGIES
            ================================= */}

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-card">

                <div className="timeline-date">

                  <FaCalendarAlt />

                  <span>
                    Jun 2024 – May 2025
                  </span>

                </div>

                <h3>
                  Software Engineer
                </h3>

                <h4>
                  Lab Iconics Technologies
                </h4>

                <p className="experience-domain">
                  Laboratory Information Management System (LIMS) &
                  Electronic Laboratory Notebook (ELN) for the
                  Pharmaceutical Industry
                </p>

                <div className="company-info">

                  <div>
                    <FaMapMarkerAlt />
                    Hyderabad
                  </div>

                  <div>
                    <FaBuilding />
                    51–200 Employees
                  </div>

                  <div>
                    <FaFlask />
                    Pharma Informatics
                  </div>

                </div>

                <ul>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        LIMS
                      </span>

                      <span>
                        Developed enterprise applications for
                        Laboratory Information Management System
                        (LIMS) used by pharmaceutical, biotechnology
                        and research laboratories.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        ELN
                      </span>

                      <span>
                        Worked on Electronic Laboratory Notebook
                        (ELN) modules supporting experiment
                        documentation, laboratory workflows and
                        scientific data management.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        React
                      </span>

                      <span>
                        Built reusable user interface components
                        using React.js while integrating Rust,
                        PostgreSQL and JSON-based APIs.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        UI/UX
                      </span>

                      <span>
                        Improved application usability by developing
                        responsive interfaces, enhancing workflows
                        and optimizing overall application performance.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        QA
                      </span>

                      <span>
                        Collaborated closely with QA Engineers,
                        Business Analysts and Domain Experts to
                        deliver production-ready features following
                        SDLC and Agile practices.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        Support
                      </span>

                      <span>
                        Investigated production issues, implemented
                        feature enhancements, fixed defects and
                        maintained high-quality enterprise software
                        for laboratory operations.
                      </span>

                    </div>

                  </li>

                  <li>

                    <FaCheckCircle className="check-icon" />

                    <div className="experience-point">

                      <span className="count-badge">
                        Pharma
                      </span>

                      <span>
                        Contributed to applications supporting
                        pharmaceutical laboratories with compliance-
                        focused solutions including LIMS, ELN,
                        workflow automation and scientific data
                        management.
                      </span>

                    </div>

                  </li>

                </ul>

              </div>

            </motion.div>
          </div>

        </div>

      </section>
    );
  }
}

export default Experience;