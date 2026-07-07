import React, { Component } from "react";
import { motion } from "framer-motion";
import SentimentScope from "../assets/projects/SentimentScope.png";
import FitnessBooking from "../assets/projects/FitnessBooking.png";
import SalesAnalytics from "../assets/projects/SalesAnalytics.png";
// import AMDPipeline from "../assets/projects/AMDStock.png";
// import AlibabaAnalytics from "../assets/projects/AlibabaStock.png";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 1,

          section: "Full Stack Development",

          title: "SentimentScope",

          image: SentimentScope,

          overview:
            "SentimentScope is a full-stack web application that analyzes customer product reviews and transforms raw review data into meaningful business insights through sentiment analysis and interactive visualizations.",

          owner: "saiteja2600",

          repo: "SentimentScope",

          github:
            "https://github.com/saiteja2600/SentimentScope",

          stack: [
            "React",
            "Flask",
            "PostgreSQL",
            "Python"
          ],

          technologies: []
        },

        {
          id: 2,

          section: "Full Stack Development",

          title: "Fitness Booking System",
          image: FitnessBooking,

          overview:
            "A web-based application for managing a fitness studio, built using Django. It provides two separate panels: • Admin Panel: To manage trainers, classes, and class schedules. • User Panel: To register, log in, view class schedules, and book fitness sessions. This project was developed as part of the Python Developer Assignment 2025 to demonstrate backend development, API design, and system structuring using Django.",

          owner: "saiteja2600",

          repo: "Fitnees_Booking",

          github: "https://github.com/saiteja2600/Fitnees_Booking",

          stack: [
            "Python",
            "Django",
            "Sqlite3"
          ],

          technologies: []
        },

        {
          id: 3,

          section: "Data Engineering",

          title: "Sales Analytics Platform",
          image: SalesAnalytics,
          overview:
            "This project presents a Sales Analytics Dashboard built using Power BI to provide a centralized view of sales performance and business insights. It enables stakeholders to monitor key metrics, compare performance across different dimensions, and make data-driven decisions using a single interactive dashboard.",

          owner: "saiteja2600",

          repo: "Sales-Analytics-Platform",

          github: "https://github.com/saiteja2600/Sales-Analytics-Platform",

          stack: [
            "Power BI",
            "DAX",
            "Azure SQL",
            "AzurE Data Factory",
            "Azure Data Bricks",
            "Azure Synpase",
            "Azure Blob Storage",
            "Microsoft SQL Server 2019"
          ],

          technologies: []
        },

        {
          id: 4,

          section: "Data Engineering",

          title: "Alibaba Group – Analytics",

          overview:
            "Designed and implemented an end-to-end Azure Data Engineering pipeline to process Alibaba historical stock market data. Built scalable ETL workflows using Azure Data Factory and PySpark, transformed raw market data into curated analytical datasets using the Medallion Architecture (Bronze, Silver, Gold), and stored processed data in Azure SQL for business reporting and future machine learning applications.",
          owner: "saiteja2600",

          repo: "AlibabaStockData",

          github: "https://github.com/saiteja2600/Alibaba-Stocks-Analytics.git",

          stack: [
            "Python",
            "PySpark",
            "Azure Data Factory",
            "Azure Databricks",
            "Azure Data Lake Storage Gen2",
            "Azure SQL Database",
            "Azure Synapse Analytics",
            "Delta Lake",
            "Power BI"
          ],

          technologies: [
            {
              title: "Data Ingestion",
              items: [
                "Azure Data Factory",
                "REST API",
                "Historical Stock Dataset"
              ]
            },
            {
              title: "Data Processing",
              items: [
                "PySpark",
                "Delta Lake",
                "Data Cleaning",
                "Feature Engineering"
              ]
            },
            {
              title: "Storage",
              items: [
                "ADLS Gen2",
                "Azure SQL Database"
              ]
            },
            {
              title: "Reporting",
              items: [
                "Power BI",
                "Business KPIs"
              ]
            }
          ]
        },

        // {
        //   id: 5,

        //   section: "Data Engineering",

        //   title: "Alibaba Stock Analytics",

        //   overview:
        //     "End-to-end stock market analytics solution that processes Alibaba historical trading data, performs trend analysis and generates business intelligence dashboards.",

        //   owner: "saiteja2600",

        //   repo: "Alibaba-Stocks-Analytics",

        //   github: "https://github.com/saiteja2600/Alibaba-Stocks-Analytics",

        //   stack: [
        //     "Python",
        //     "PySpark",
        //     "Azure SQL",
        //     "Kafka",
        //     "AzurE Data Factory",
        //     "Azure Data Bricks",
        //     "Azure Synpase",
        //     "Azure Blob Storage",
        //     "Microsoft SQL Server 2019"
        //   ],

        //   technologies: []
        // },
      ],
    };
  }

  componentDidMount() {
    this.loadGitHubLanguages();
  }
  calculatePercentages = (languages) => {

    const total = Object.values(languages).reduce(
      (sum, value) => sum + value,
      0
    );

    return Object.entries(languages).map(
      ([name, bytes]) => ({
        name,
        percentage: Number(
          ((bytes / total) * 100).toFixed(1)
        ),
      })
    );
  };

  loadGitHubLanguages = async () => {

    const updatedProjects = await Promise.all(

      this.state.projects.map(async (project) => {

        try {

          const response = await fetch(

            `https://api.github.com/repos/${project.owner}/${project.repo}/`

          );

          if (!response.ok)
            return project;

          const data =
            await response.json();

          return {

            ...project,

            technologies:
              this.calculatePercentages(
                data
              ),

          };

        } catch (error) {

          console.log(error);

          return project;

        }

      })

    );

    this.setState({

      projects: updatedProjects,

    });

  };
  renderProjectCard = (project) => {
    return (
      <motion.div
        key={project.id}
        className="project-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        viewport={{ once: true }}
      >
        {/* Project Image */}

        <div className="project-image">

          {project.image && (
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}

        </div>

        {/* Project Content */}

        <div className="project-content">

          <div className="project-header">

            <div>

              <h3>{project.title}</h3>

              <span className="project-category">
                {project.section}
              </span>

            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>

          </div>

          <div className="project-body">
            <p>{project.overview}</p>
          </div>

          {/* Stack */}

          <div className="stack">

            {project.stack.map((item, index) => (

              <span
                key={index}
                className="stack-item"
              >
                {item}
              </span>

            ))}

          </div>

          {/* Languages */}

          {/* <div className="technology-section">

            <h4>Repository Language Breakdown</h4>

            {

              project.technologies.length === 0 ?

                <p className="loading-text">
                  Loading GitHub Data...
                </p>

                :

                project.technologies.map((tech) => (

                  <div
                    className="technology-item"
                    key={tech.name}
                  >

                    <div className="technology-header">

                      <span>

                        {tech.name}

                      </span>

                      <span>

                        {tech.percentage}%

                      </span>

                    </div>

                    <div className="progress">

                      <motion.div

                        className="progress-fill"

                        initial={{
                          width: 0
                        }}

                        whileInView={{
                          width: `${tech.percentage}%`
                        }}

                        transition={{
                          duration: 1
                        }}

                        viewport={{
                          once: true
                        }}

                      />

                    </div>

                  </div>

                ))

            }

          </div> */}

          {/* Footer */}

          <div className="project-footer">

            {/* <div className="repo-info">

              <span>

                {project.technologies.length}

                Languages

              </span>

            </div> */}

            <a

              href={project.github}

              target="_blank"

              rel="noreferrer"

              className="repo-btn"

            >

              View Repository

            </a>

          </div>

        </div>

      </motion.div>
    );
  };

  render() {

    return (

      <section className="projects">

        <div className="projects-container">

          <div className="page-title">
            <h1>Projects</h1>
            <p>
              A collection of full-stack applications, data engineering solutions,
              and analytics projects showcasing my technical expertise.
            </p>
          </div>

          <div className="project-grid">
            {this.state.projects.map(project =>
              this.renderProjectCard(project)
            )}
          </div>

        </div>

      </section>

    );

  }
}
export default Projects;