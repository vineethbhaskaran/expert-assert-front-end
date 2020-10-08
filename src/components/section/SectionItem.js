import React, { Component } from "react";
import { Link } from "react-router-dom";
export class SectionItem extends Component {
    handleOnClick = (currentSection) => {
        console.log("Course:"+currentSection.course+" Section:"+currentSection._id);
      }

  render() {
    return (
      <button type="button" className="list-group-item list-group-item-action" onClick={this.handleOnClick.bind(this, this.props.section)}>
        {this.props.section.sectionNumber}. {this.props.section.name}
      </button>
    );
  }
}

export default SectionItem;
