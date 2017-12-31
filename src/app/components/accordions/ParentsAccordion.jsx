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
                id='noClickAccordion'>
                <h4>Parents</h4>
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <p>
                  { parents }
                </p>
                <h5>Birthplace</h5>
                <p>
                  { birthplace }
                </p>
                <h5>Parents' Alignment</h5>
                <p>
                  { `Mother: ${alignment.get(1)}` }
                </p>
                <p>
                  { `Father: ${alignment.get(2)}` }
                </p>
                <h5>Parents' Occupation</h5>
                { occupation.get(1) === 'Adventurer' &&
                  <p>
                    { `Mother: ${parentsClass.get(1)} ${occupation.get(1).toLowerCase()}` }
                  </p>
                }
                { occupation.get(1) !== 'Adventurer' &&
                  <p>
                    { `Mother: ${occupation.get(1)}` }
                  </p>
                }
                { occupation.get(2) === 'Adventurer' &&
                  <p>
                    { `Father: ${parentsClass.get(2)} ${occupation.get(2).toLowerCase()} ` }
                  </p>
                }
                { occupation.get(2) !== 'Adventurer' &&
                  <p>
                    { `Father: ${occupation.get(2)}` }
                  </p>
                }
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
