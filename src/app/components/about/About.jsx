import React from 'react';
import { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getParents } from '../../thunks/parentsThunks.js';
import { getSiblings } from '../../thunks/siblingsThunks.js';
import { getFamilyAndFriends } from '../../thunks/familyAndFriendsThunk.js';

function mapDispatchToProps(dispatch) {
  return {
    getCharacterParents: bindActionCreators(getParents, dispatch),
    getCharacterSiblings: bindActionCreators(getSiblings, dispatch),
    getCharacterFamilyAndFriends: bindActionCreators(getFamilyAndFriends, dispatch),
  };
}

@connect(null, mapDispatchToProps)
export default class About extends Component {
  static PropTypes = {
    getCharacterParents: PropTypes.func,
    getCharacterSiblings: PropTypes.func,
    getCharacterFamilyAndFriends: PropTypes.func,
  }

  handleButtonClick = () => {
    const {
      getCharacterParents,
      getCharacterSiblings,
      getCharacterFamilyAndFriends,
    } = this.props;

    getCharacterParents();
    getCharacterSiblings();
    getCharacterFamilyAndFriends();
  }

  render() {

    return (
      <div className="container about">
        <h1>About</h1>
        <Button onClick={ this.handleButtonClick }>
          Click
        </Button>
      </div>
    )
  };
}
