import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';
import LifeEventAccordion from './LifeEventAccordion.jsx';

function mapStateToProps(state) {
  return {
    numberOfLifeEvents: state.getIn(['lifeEvents', 'NumberOfLifeEvents']),
  };
}

@connect(mapStateToProps, null)
export default class LifeEventsAccordion extends Component {
  static PropTypes = {
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
    const { numberOfLifeEvents } = this.props;

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
                id='noClickAccordion'>
                <h4>Life Events</h4>
              </Accordion.Title>
            </Accordion>
            { lifeEvents }
          </Segment>
        }
      </div>
    )
  };
}
