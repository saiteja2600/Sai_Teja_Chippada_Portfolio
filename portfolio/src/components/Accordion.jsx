import React, { Component } from "react";

class Accordion extends Component {

  constructor(props) {

    super(props);

    this.state = {
      active: false
    };

  }

  toggleAccordion = () => {

    this.setState({
      active: !this.state.active
    });

  };

  render() {

    return (

      <div className="accordion">

        <div className={`accordion-item ${this.state.active ? "active" : ""}`}>

          <button
            className="accordion-header"
            onClick={this.toggleAccordion}
          >
            What is React?
          </button>

          <div className="accordion-content">

            <div className="accordion-body">

              React is a JavaScript library for building user interfaces.

            </div>

          </div>

        </div>

      </div>

    );

  }

}

export default Accordion;