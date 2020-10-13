import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSectionsByCourse } from "../../reduxUtils/actions/sectionAction";
import SectionList from "./SectionList";
import Modal from "../modals/Modal";
import { createSection } from "../../reduxUtils/actions/sectionAction";
import store from "../../reduxUtils/store";
export class SectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showSectionModel: false };
    this.openSectionModal = this.openSectionModal.bind(this);
    this.closeSectionModal = this.closeSectionModal.bind(this);
    this.createSection = this.createSection.bind(this);
  }

  openSectionModal = () => {
    this.setState({
      showSectionModel: true,
    });
  };

  closeSectionModal = () => {
    this.setState({
      showSectionModel: false,
    });
  };

  createSection(sectionObject) {
    //set CourseId and sned to action
    sectionObject.course = this.props.courseId;
    store.dispatch(createSection(sectionObject));
    this.closeSectionModal();
  }

  render() {
    return (
      <div className="col-2 panel-full-height p-0 bg-grey">
        <button className="btn btn-outline-primary .btn-block mx-1 my-1 " onClick={this.openSectionModal}>
          Create New Section
        </button>
        <Modal
          show={this.state.showSectionModel}
          closeModal={this.closeSectionModal}
          createSection={this.createSection}
        />
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
