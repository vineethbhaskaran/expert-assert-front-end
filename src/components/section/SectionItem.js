import React, { Component } from "react";
import { Link } from "react-router-dom";
export class SectionItem extends Component {
  state = {
    currentClass: "list-group-item list-group-item-action",
  };
  handleOnClick = (currentSection) => {
    console.log("Course:" + currentSection.course + " Section:" + currentSection._id);
   
   
  };

  render() {
    return (
      <button
        type="button"
        className={this.state.currentClass}
        onClick={this.handleOnClick.bind(this, this.props.section)}
      >
        {this.props.section.sectionNumber}. {this.props.section.name}
      </button>
    );
  }
}

export default SectionItem;
