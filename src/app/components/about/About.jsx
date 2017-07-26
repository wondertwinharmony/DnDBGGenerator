import React from 'react';
import { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter } from '../../actions/exampleActionCreators.js';

function mapStateToProps(state) {
  return {
    count: state.getIn(['example', 'triMet', 'count']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount: bindActionCreators(incrementCounter, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class About extends Component {
  static PropTypes = {
    incrementCount: PropTypes.func,
    count: PropTypes.string,
  }

  handleButtonClick = () => {
    const { count, incrementCount } = this.props;
    const incrementedCount = count + 1;

    incrementCount(
      incrementedCount,
    );
  }

  render() {
    const { count } = this.props;

    return (
      <div className="container about">
        <h1>About</h1>
        <Button onClick={ this.handleButtonClick }>
          Click
        </Button>
        <h1>{ count }</h1>
      </div>
    )
  };
}
