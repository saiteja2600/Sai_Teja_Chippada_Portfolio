import { Component } from "react";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const RESUME_PATH = "/resume/Data_Engineer_Resume/SAI_TEJA_CHIPPADA_Data_Engineering_Resume.pdf";
const RESUME_FILENAME = "SAI_TEJA_CHIPPADA_Data_Engineering_Resume.pdf";

class DataEngineer extends Component {
  handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(RESUME_PATH);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = RESUME_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      window.open(RESUME_PATH, "_blank");
    }
  };

  render() {
    return (
      <div className="resume-container">
        <div className="resume-header">
          <Link to="/" className="back-btn">
            <FaArrowLeft />
            Back
          </Link>

          <button onClick={this.handleDownload} className="download-btn">
            <FaDownload />
            Download Resume
          </button>
        </div>

        <div className="resume-viewer">
          <iframe
            src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title="Resume"
          />
        </div>
      </div>
    );
  }
}

export default DataEngineer;