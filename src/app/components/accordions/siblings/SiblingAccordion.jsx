import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state, { id }) {
  return {
    birthOrder: state.getIn(['siblings', 'BirthOrder', id]),
    occupation: state.getIn(['siblings', 'Occupation', id]),
    alignment: state.getIn(['siblings', 'Alignment', id]),
    status: state.getIn(['siblings', 'Status', id]),
    attitude: state.getIn(['siblings', 'Attitude', id]),
    siblingClass: state.getIn(['siblings', 'Class', id]),
  };
}

@connect(mapStateToProps, null)
export default class SiblingAccordion extends Component {
  static PropTypes = {
    id: PropTypes.Number,
    birthOrder: PropTypes.Object,
    occupation: PropTypes.Object,
    alignment: PropTypes.Object,
    status: PropTypes.Object,
    attitude: PropTypes.Object,
    siblingClass: PropTypes.Object,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
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
      id,
      birthOrder,
      occupation,
      alignment,
      status,
      attitude,
      siblingClass,
    } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        <Accordion inverted>
          <Accordion.Title
            active={ activeIndex[0] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Birth Order
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[0] }>
            <p>
              { birthOrder }
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={ activeIndex[1] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Occupation
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[1] }>
            <p>
              { occupation }
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={ activeIndex[2] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Alignment
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[2] }>
            <p>
              { alignment }
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={ activeIndex[3] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Status
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[3] }>
            <p>
              { status }
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={ activeIndex[4] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Attitude
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[4] }>
            <p>
              { attitude }
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={ activeIndex[5] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Sibling Class
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[5] }>
            <p>
              { siblingClass }
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  };
}
