import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import Barbarian from '../../assets/Barbarian.png';
import Bard from '../../assets/Bard.png';
import Cleric from '../../assets/Cleric.png';
import Druid from '../../assets/Druid.png';
import Fighter from '../../assets/Fighter.png';
import Monk from '../../assets/Monk.png';
import Paladin from '../../assets/Paladin.png';
import Ranger from '../../assets/Ranger.png';
import Rogue from '../../assets/Rogue.png';
import Sorcerer from '../../assets/Sorcerer.png';
import Warlock from '../../assets/Warlock.png';
import Wizard from '../../assets/Wizard.png';

function mapStateToProps(state) {
  return {
    characterClass: state.getIn(['personalDecisions', 'CharacterClass']),
  };
}

@connect(mapStateToProps, null)
export default class ClassImage extends Component {
  static PropTypes = {
    characterClass: PropTypes.String,
  }

  render() {
    const { characterClass } = this.props;

    const srcMap = {
      Barbarian,
      Bard,
      Cleric,
      Druid,
      Fighter,
      Monk,
      Paladin,
      Ranger,
      Rogue,
      Sorcerer,
      Warlock,
      Wizard,
    };

    return (
      <div>
        { characterClass.length &&
          <Image src={ srcMap[characterClass] }/>
        }
      </div>
    )
  };
}
