import React from 'react';
import { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter } from '../../actions/exampleActionCreators.js';
import { exampleThunk, getParents } from '../../thunks/thunks.js';
import { familyLifestyle } from '../../utils/origins/familyAndFriends/familyLifestyle.js';
import { home } from '../../utils/origins/familyAndFriends/home.js';

function mapStateToProps(state) {
  return {
    count: state.getIn(['example', 'triMet', 'count']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount: bindActionCreators(incrementCounter, dispatch),
    thunk: bindActionCreators(exampleThunk, dispatch),
    getCharacterParents: bindActionCreators(getParents, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class About extends Component {
  static PropTypes = {
    incrementCount: PropTypes.func,
    count: PropTypes.string,
    thunk: PropTypes.func,
    getCharacterParents: PropTypes.func,
  }

  handleButtonClick = () => {
    const {
      count,
      incrementCount,
      thunk,
      getCharacterParents,
    } = this.props;
    const incrementedCount = count + 1;

    // incrementCount({
    //   count: incrementedCount,
    // });

    getCharacterParents();

    thunk({
      count: incrementedCount,
    });
  }

  render() {
    const { count } = this.props;
    // console.log('this is familyLifestyle: ', familyLifestyle());
    console.log('this is home: ', home(familyLifestyle()));

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
