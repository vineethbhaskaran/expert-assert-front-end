import React, { Component } from 'react'

export class SectionItem extends Component {
    render() {
        return (
            <li className="list-group-item">{this.props.section.sectionNumber}. {this.props.section.name}</li>
        )
    }
}

export default SectionItem
