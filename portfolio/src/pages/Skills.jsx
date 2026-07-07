import { Component } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiPytorch,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

class Skills extends Component {
  render() {
    return (
      <section className="skills-section">
        <div className="skill-container">
          <motion.div
            className="skills-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Technical <span>Skills</span>
            </h2>

            <p>
              Technologies and tools I use to build modern web applications
              and cloud-based data engineering solutions.
            </p>
          </motion.div>

          <div className="skills-grid">

            <motion.div
              className="skill-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icons">
                <FaPython />
                <FaDatabase />
              </div>

              <h3>Programming</h3>

              <p className="skill-desc">
                Building scalable applications using Python and SQL with
                clean and efficient code.
              </p>
            </motion.div>

            <motion.div
              className="skill-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icons">
                <FaReact />
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
              </div>

              <h3>Frontend</h3>

              <p className="skill-desc">
                Creating responsive and interactive user interfaces with
                modern web technologies.
              </p>
            </motion.div>

            <motion.div
              className="skill-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icons">
                <SiDjango />
                <SiFlask />
              </div>

              <h3>Backend</h3>

              <p className="skill-desc">
                Developing REST APIs and secure backend applications with
                Django and Flask.
              </p>
            </motion.div>

            <motion.div
              className="skill-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icons">
                <SiPostgresql />
                <SiMysql />
              </div>

              <h3>Databases</h3>

              <p className="skill-desc">
                Designing relational databases and writing optimized SQL
                queries for high performance.
              </p>
            </motion.div>

            <motion.div
              className="skill-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icons">
                <VscAzure />
              </div>

              <h3>Azure</h3>

              <p className="skill-desc">
                Building cloud-based data solutions using Azure services and
                modern ETL workflows.
              </p>
            </motion.div>

            <motion.div
              className="skill-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icons">
                <FaCloud />
                <SiPytorch />
              </div>

              <h3>Data Engineering</h3>

              <p className="skill-desc">
                Processing, transforming, and managing data pipelines for
                scalable analytics.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    );
  }
}

export default Skills;