import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSectionsByCourse } from "../../reduxUtils/actions/sectionAction";
import SectionItem from "./SectionItem";
import SectionList from "./SectionList";

export class SectionContainer extends Component {
  render() {
    return (
      <div className="col-2 panel-full-height p-0 bg-grey">
        <a href="#" className="btn btn-outline-primary .btn-block mx-1 my-1 ">
          Create New Section
        </a>
        <h6 className="px-2 pb-25 pt-25 mb-0 border-bottom font-weight-bold">SECTIONS</h6>
        <ul className="list-group list-group-flush">
          <SectionList sections={this.props.sections} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sections: state.sectionData.sections,
});

export default connect(mapStateToProps, { fetchSectionsByCourse })(SectionContainer);
