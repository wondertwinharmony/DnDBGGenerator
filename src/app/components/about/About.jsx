import React from 'react';
import { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getParents } from '../../thunks/parentsThunks.js';
import { getSiblings } from '../../thunks/siblingsThunks.js';
import { numberOfSiblings } from '../../utils/origins/numberOfSiblings.js';
import { home } from '../../utils/origins/familyAndFriends/home.js';

function mapDispatchToProps(dispatch) {
  return {
    getCharacterParents: bindActionCreators(getParents, dispatch),
    getCharacterSiblings: bindActionCreators(getSiblings, dispatch),
  };
}

@connect(null, mapDispatchToProps)
export default class About extends Component {
  static PropTypes = {
    getCharacterParents: PropTypes.func,
    getCharacterSiblings: PropTypes.func,
  }

  handleButtonClick = () => {
    const {
      getCharacterParents,
      getCharacterSiblings,
    } = this.props;

    getCharacterParents();
    getCharacterSiblings();
  }

  render() {
    const { count } = this.props;
    // console.log('this is familyLifestyle: ', familyLifestyle());
    console.log('amount of siblings: ', numberOfSiblings());

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
