import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state) {
  return {
    background: state.getIn(['personalDecisions', 'Background']),
    classTraining: state.getIn(['personalDecisions', 'ClassTraining']),
  };
}

@connect(mapStateToProps, null)
export default class PersonalDecisionsAccordion extends Component {
  static PropTypes = {
    background: PropTypes.String,
    classTraining: PropTypes.String,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: {
        0: false,
        1: false,
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
                Background
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <p>
                  { background }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[1] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Class Training
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[1] }>
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
