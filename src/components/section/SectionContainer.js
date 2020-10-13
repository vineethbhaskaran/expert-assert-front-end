import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSectionsByCourse } from "../../reduxUtils/actions/sectionAction";
import SectionList from "./SectionList";
import Modal from "../modals/Modal";

export class SectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createSection = this.createSection.bind(this);
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };
  createSection(name, sectionNumber, numberofLesson) {
    console.log("Section Name: " + name + " " + sectionNumber + " " + numberofLesson);
    this.closeModal();
  }

  render() {
    return (
      <div className="col-2 panel-full-height p-0 bg-grey">
        <button className="btn btn-outline-primary .btn-block mx-1 my-1 " onClick={this.showModal}>
          Create New Section
        </button>
        <Modal show={this.state.show} closeModal={this.closeModal} createSection={this.createSection} />
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
