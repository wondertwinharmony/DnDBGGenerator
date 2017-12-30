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
            Sibling #{ id }
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[0] }>
            <h4>Birth Order</h4>
            <p>
              { birthOrder }
            </p>
            <h4>Sibling Occupation</h4>
            <p>
              { occupation }
            </p>
            <h4>Sibling Alignment</h4>
            <p>
              { alignment }
            </p>
            <h4>Sibling Status</h4>
            <p>
              { status }
            </p>
            <h4>Sibling Attitude</h4>
            <p>
              { attitude }
            </p>
            <h4>Sibling Class</h4>
            <p>
              { siblingClass }
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  };
}
