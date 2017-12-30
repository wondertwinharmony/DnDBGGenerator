import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state) {
  return {
    background: state.getIn(['personalDecisions', 'Background']),
    classTraining: state.getIn(['personalDecisions', 'ClassTraining']),
    characterBackground: state.getIn(['personalDecisions', 'CharacterBackground']),
    characterClass: state.getIn(['personalDecisions', 'CharacterClass']),
    characterRace: state.getIn(['personalDecisions', 'CharacterRace']),
  };
}

@connect(mapStateToProps, null)
export default class PersonalDecisionsAccordion extends Component {
  static PropTypes = {
    background: PropTypes.String,
    classTraining: PropTypes.String,
    characterBackground: PropTypes.String,
    characterClass: PropTypes.String,
    characterRace: PropTypes.String,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: {
        0: false,
      },
    };
  }

  handleClick = (e, titleProps) => {
    const { activeIndex } = this.state;
    const index = titleProps;
    const newIndex = activeIndex[index] ? false : true;
    activeIndex[index] = newIndex;

    this.setState({ activeIndex });
  }

  render() {
    const {
      background,
      classTraining,
      characterBackground,
      characterClass,
      characterRace,
    } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        { classTraining.length &&
          <Segment inverted>
            <Accordion inverted>
              <Accordion.Title
                active={ activeIndex[0] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Personal Decisions
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <p>
                  { characterRace }
                </p>
                <p>
                  { characterBackground }
                </p>
                <p>
                  { background }
                </p>
                <p>
                  { characterClass }
                </p>
                <p>
                  { classTraining }
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
