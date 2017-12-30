import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

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

    return (
      <div className='classImage'>
        { characterClass.length &&
          <Image src={ `/src/app/components/classImage/classSymbols/${characterClass}.png` } size='small'/>
        }
      </div>
    )
  };
}
