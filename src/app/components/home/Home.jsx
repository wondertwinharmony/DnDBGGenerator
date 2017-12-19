import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    triMet: state.getIn(['example', 'triMet']),
  };
}

@connect(mapStateToProps, null)
export default class Home extends Component {
  static PropTypes = {
    triMet: PropTypes.string,
  }

  render() {
    const { triMet } = this.props;

    return (
      <div className="container home">
        <h1>Home</h1>
        <h1>{ triMet ? triMet.get('name') : 'nope' }</h1>
      </div>
    )
  };
}
