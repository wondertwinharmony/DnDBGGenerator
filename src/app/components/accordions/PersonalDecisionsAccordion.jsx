import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state) {
  return {
    age: state.getIn(['lifeEvents', 'Age']),
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
    age: PropTypes.String,
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
        0: true,
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
      age,
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
                id='noClickAccordion'>
                <h4>Personal Decisions</h4>
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <h5>Character Age</h5>
                <p>
                  { `You are ${age}.` }
                </p>
                <h5>Character Race</h5>
                <p>
                  { characterRace }
                </p>
                <h5>Character Class</h5>
                <p>
                  { characterClass }
                </p>
                <h5>Character chose class because...</h5>
                <p>
                  { classTraining }
                </p>
                <h5>Character Background</h5>
                <p>
                  { characterBackground }
                </p>
                <h5>Character chose background because...</h5>
                <p>
                  { background }
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
