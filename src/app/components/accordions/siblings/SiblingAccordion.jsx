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

    const { id } = this.props;

    this.state = {
      activeIndex: {
        0: id === 1 ? true : false,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props;
    this.setState({ activeIndex: {
        0: id === 1 ? true : false,
      },
    });
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

    const siblingOccupation = occupation === 'Adventurer' ? `${siblingClass.toLowerCase()} ${occupation.toLowerCase()}` : occupation.toLowerCase();

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
            <p>
              { `${birthOrder} Sibling: This sibling is a ${alignment.toLowerCase()} ${siblingOccupation}. They are ${status.toLowerCase()}. They feel ${attitude.toLowerCase()} towards you.` }
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  };
}

// <h5>Birth Order</h5>
// <p>
//   { birthOrder }
// </p>
// <h5>Sibling Occupation</h5>
// { occupation === 'Adventurer' &&
//   <p>
//     { `${siblingClass} ${occupation.toLowerCase()}` }
//   </p>
// }
// { occupation !== 'Adventurer' &&
//   <p>
//     { occupation }
//   </p>
// }
// <h5>Sibling Alignment</h5>
// <p>
//   { alignment }
// </p>
// <h5>Sibling Status</h5>
// <p>
//   { status }
// </p>
// <h5>Sibling Attitude</h5>
// <p>
//   { attitude }
// </p>
