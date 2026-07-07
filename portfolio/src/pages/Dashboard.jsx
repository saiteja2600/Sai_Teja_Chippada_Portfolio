import { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaReact,
  FaPython,
  FaDatabase,
  FaChevronDown,
  FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";

import {
  SiApachespark, SiPostgresql, SiDjango, SiFlask
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import Profile from "../assets/images/Saiteja.dev.png";

class Dashboard extends Component {
  render() {
    return (
      <section className="hero">
        {/* Left Section */}
        <div className="hero-left">
          <motion.p
            className="greeting"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sai Teja <span>Chippada</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Software Engineer
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building scalable web applications and cloud data pipelines using
            React, Python, Azure & SQL.
          </motion.h3>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Passionate about building scalable web applications,
            designing cloud data pipelines, and creating
            data-driven solutions using React, Python,
            Azure, SQL, and Apache Spark.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <FaReact />
            <FaPython />
            <SiDjango />

            <SiFlask />
            <VscAzure />
            <FaDatabase />
            <SiApachespark />
            <SiPostgresql />
            <FaHtml5 />

            <FaCss3Alt />

            <FaJs />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <button className="btn-primary">
              View Projects
              <FaArrowRight />
            </button>

            <div className="resume-dropdown">

              <button className="btn-secondary">
                <FaDownload />
                Resume
                <FaChevronDown />
              </button>

              <div className="dropdown-content">

                <Link to="/resume/data-engineer">
                  Data Engineer
                </Link>

                {/* <Link to="/resume/full-stack">
      Full Stack Developer
    </Link> */}

              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="hero-right"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          <div className="profile-circle">
            <img src={Profile} alt="Sai Teja" />
          </div>
        </motion.div>
      </section>
    );
  }
}

export default Dashboard;