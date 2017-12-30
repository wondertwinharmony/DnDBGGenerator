import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state) {
  return {
    parents: state.getIn(['parents', 'Parents']),
    birthplace: state.getIn(['parents', 'Birthplace']),
    alignment: state.getIn(['parents', 'Alignment']),
    occupation: state.getIn(['parents', 'Occupation']),
    parentsClass: state.getIn(['parents', 'Class']),
  };
}

@connect(mapStateToProps, null)
export default class ParentsAccordion extends Component {
  static PropTypes = {
    parents: PropTypes.String,
    birthplace: PropTypes.String,
    alignment: PropTypes.Object,
    occupation: PropTypes.Object,
    parentsClass: PropTypes.Object,
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
      parents,
      birthplace,
      alignment,
      occupation,
      parentsClass,
    } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        { parents.length > 0 &&
          <Segment inverted>
            <Accordion inverted>
              <Accordion.Title
                active={ activeIndex[0] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Parents
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <h4>Parents</h4>
                <p>
                  { parents }
                </p>
                <h4>Birthplace</h4>
                <p>
                  { birthplace }
                </p>
                <h4>Parents' Alignment</h4>
                <p>
                  { alignment }
                </p>
                <h4>Parents' Occupation</h4>
                <p>
                  { occupation }
                </p>
                <h4>Parents' Class</h4>
                <p>
                  { parentsClass }
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
