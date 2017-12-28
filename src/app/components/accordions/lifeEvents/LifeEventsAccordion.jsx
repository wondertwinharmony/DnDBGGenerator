import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';
import LifeEventAccordion from './LifeEventAccordion.jsx';

function mapStateToProps(state) {
  return {
    age: state.getIn(['lifeEvents', 'Age']),
    numberOfLifeEvents: state.getIn(['lifeEvents', 'NumberOfLifeEvents']),
  };
}

@connect(mapStateToProps, null)
export default class LifeEventsAccordion extends Component {
  static PropTypes = {
    age: PropTypes.String,
    numberOfLifeEvents: PropTypes.Number,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: { 0: false },
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
      numberOfLifeEvents,
    } = this.props;

    const { activeIndex } = this.state;

    const lifeEvents = [];

    for (let i = 1; i <= numberOfLifeEvents; i++) {
      lifeEvents.push(<LifeEventAccordion id={ i } key={ i }/>);
    }

    return (
      <div>
        { numberOfLifeEvents > 0 &&
          <Segment inverted>
            <Accordion inverted>
              <Accordion.Title
                active={ activeIndex[0] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Age
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <p>
                  { age }
                </p>
              </Accordion.Content>
            </Accordion>
            { lifeEvents }
          </Segment>
        }
      </div>
    )
  };
}
