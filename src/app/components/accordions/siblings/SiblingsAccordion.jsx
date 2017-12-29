import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import SiblingAccordion from './SiblingAccordion.jsx';

function mapStateToProps(state) {
  return {
    numberOfSiblings: state.getIn(['siblings', 'NumberOfSiblings']),
  };
}

@connect(mapStateToProps, null)
export default class SiblingsAccordion extends Component {
  static PropTypes = {
    numberOfSiblings: PropTypes.Number,
  }

  render() {
    const { numberOfSiblings } = this.props;
    const siblings = [];

    for (let i = 1; i <= numberOfSiblings; i++) {
      siblings.push(<SiblingAccordion id={ i } key={ i }/>);
    }

    return (
      <div>
        { numberOfSiblings > 0 &&
          <Segment inverted>
            { siblings }
          </Segment>
        }
      </div>
    )
  };
}