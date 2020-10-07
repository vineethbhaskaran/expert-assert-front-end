import React, { Component } from 'react'
import {SectionItem} from './SectionItem'
import PropTypes from "prop-types";

export class SectionList extends Component {
    render() {
        return this.props.sections.map((section)=>(<SectionItem key={section._id} section={section}/>)
        );
      }
}

//Prop types
SectionList.propTypes = {
    sections: PropTypes.array.isRequired,
  };

export default SectionList
