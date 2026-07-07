import React, { Component } from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaPython,
  FaMicrosoft,
  FaChartBar,
  FaGoogle,
  FaCode
} from "react-icons/fa";

import { SiCss, SiHtml5, SiJavascript, SiMysql, SiReact } from "react-icons/si";

class CertificatesAndAchievements extends Component {
  certificates = [
    {
      title: "Explore Core Data Concepts in Microsoft Azure",
      provider: "Coursera",
      icon: <FaMicrosoft />,
      description:
        " the basics of cloud data in Microsoft Azure: core database concepts, relational vs. non-relational data, batch vs. streaming data, and the roles people do in data",
      skills: ["Data Management", "Database Theory", "Microsoft Azure", "NoSQL", "Database Management Systems", "Data Analysis", "Relational Databases", "Data Processing", "Database Management", "Databases", "Data Store", "Cloud Service"],
      link: "https://coursera.org/share/ce9d2afcc0935943f5e7e13761ea8ac2",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      provider: "Google • Coursera",
      icon: <FaGoogle />,
      description:
        "Completed Google's 8-course professional certificate covering the complete data analytics lifecycle, including data collection, cleaning, analysis, visualization, SQL, spreadsheets, Tableau, R, and a capstone case study.",

      completed: "November 19, 2022",
      duration: "Approximately 6 months (10 hours/week)",

      certificates: [
        "Foundations: Data, Data, Everywhere",
        "Ask Questions to Make Data-Driven Decisions",
        "Prepare Data for Exploration",
        "Process Data from Dirty to Clean",
        "Analyze Data to Answer Questions",
        "Share Data Through the Art of Visualization",
        "Data Analysis with R Programming",
        "Google Data Analytics Capstone: Complete a Case Study"
      ],

      skills: [
        "Data Analysis",
        "SQL",
        "Spreadsheet Software",
        "Data Visualization",
        "Tableau",
        "R Programming",
        "Data Cleaning",
        "Analytics",
        "Case Studies",
        "Portfolio Management"
      ],

      link: "https://coursera.org/share/cf85a2df352efac86cb6276b77903697"
    },
    {
      title: "Database Design with SQL Server Management Studio (SSMS)",
      provider: "Deprecated Guided Projects • Coursera",
      icon: <SiMysql />,
      description:
        "The basics of database design in a very short project: identifying entities, attributes, and relationships, then implementing the design in Microsoft SQL Server using SQL Server Management Studio.",
      skills: [
        "Database Management",
        "SQL",
        "Database Development",
        "Data Modeling",
        "Microsoft SQL Servers",
        "Database Systems",
        "Data Entry",
        "Database Design",
        "Databases"
      ],
      link: "https://coursera.org/share/ad42f5ea08d0bb91436a4f43174fb523",
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      provider: "IBM • Coursera",
      icon: <FaCode />,
      description:
        "Learned the fundamentals of web development, including HTML, CSS, JavaScript, front-end and back-end development concepts, responsive web design, and interactive web applications.",
      skills: [
        "Full-Stack Web Development",
        "Back-End Web Development",
        "Web Design",
        "Front-End Web Development",
        "JavaScript",
        "Web Design and Development",
        "Program Development",
        "Web Development",
        "Interactive Design"
      ],
      link: "https://coursera.org/share/976cb0a8a0ccd0e31c6b33f7df93aa0d",
    },
  ];

  render() {
    return (
      <section className="certificate-section">
        <div className="certificate-container">

          <motion.div
            className="certificate-header"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1>Certificates</h1>
            <p>
              Certifications and courses that strengthened my software
              development, cloud and data engineering skills.
            </p>
          </motion.div>

          {/* <motion.div
          className="certificate-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stat-box">
            <h2>06+</h2>
            <span>Certificates</span>
          </div>

          <div className="stat-box">
            <h2>10+</h2>
            <span>Technologies</span>
          </div>

          <div className="stat-box">
            <h2>03</h2>
            <span>Learning Platforms</span>
          </div>
        </motion.div> */}

          <div className="certificate-grid">
            {this.certificates.map((certificate, index) => (
              <motion.div
                key={index}
                className="certificate-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="certificate-icon">
                  {certificate.icon}
                </div>

                <h3>{certificate.title}</h3>

                <h5>{certificate.provider}</h5>

                <p>{certificate.description}</p>


                <div className="skills">
                  {certificate.skills.slice(0, 6).map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}

                  {certificate.skills.length > 6 && (
                    <span className="more-skills">
                      +{certificate.skills.length - 6} more
                    </span>
                  )}
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CertificatesAndAchievements;