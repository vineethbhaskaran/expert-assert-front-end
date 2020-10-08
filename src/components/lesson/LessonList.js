import React, { Component } from "react";
import LessonItem from "./LessonItem";

export class LessonList extends Component {
  render() {
    return this.props.lessons.map((lesson) => <LessonItem key={lesson._id} lesson={lesson} />);
  }
}

export default LessonList;
