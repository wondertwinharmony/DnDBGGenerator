import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state, { id }) {
  return {
    lifeEvent: state.getIn(['lifeEvents', 'LifeEvents', id]),
  };
}

class LifeEventAccordion extends Component {
  static PropTypes = {
    id: PropTypes.Number,
    lifeEvent: PropTypes.String,
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
    const { lifeEvent } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        <Accordion inverted>
          <Accordion.Title
            active={ activeIndex[0] }
            onClick={ this.handleClick }>
            <Icon name='dropdown' />
            Life Event
          </Accordion.Title>
          <Accordion.Content active={ activeIndex[0] }>
            <p>
              { lifeEvent }
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  };
}

export default connect(mapStateToProps, null)(LifeEventAccordion);
