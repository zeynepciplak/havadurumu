import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h5>
          {this.props.title} {this.props.count}
        </h5>
      </div>
    );
  }
}