import React from 'react';
import { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getParents } from '../../thunks/parentsThunks.js';
import { getSiblings } from '../../thunks/siblingsThunks.js';
import { getFamilyAndFriends } from '../../thunks/familyAndFriendsThunk.js';
import { getLifeEvents } from '../../thunks/lifeEventsThunks.js';

function mapDispatchToProps(dispatch) {
  return {
    getCharacterParents: bindActionCreators(getParents, dispatch),
    getCharacterSiblings: bindActionCreators(getSiblings, dispatch),
    getCharacterFamilyAndFriends: bindActionCreators(getFamilyAndFriends, dispatch),
    getCharacterLifeEvents: bindActionCreators(getLifeEvents, dispatch),
  };
}

@connect(null, mapDispatchToProps)
export default class About extends Component {
  static PropTypes = {
    getCharacterParents: PropTypes.func,
    getCharacterSiblings: PropTypes.func,
    getCharacterFamilyAndFriends: PropTypes.func,
    getCharacterLifeEvents: PropTypes.func,
  }

  handleButtonClick = () => {
    const {
      getCharacterParents,
      getCharacterSiblings,
      getCharacterFamilyAndFriends,
      getCharacterLifeEvents,
    } = this.props;

    getCharacterParents();
    getCharacterSiblings();
    getCharacterFamilyAndFriends();
    getCharacterLifeEvents();
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
