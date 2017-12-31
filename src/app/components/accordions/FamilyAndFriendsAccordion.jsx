import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';
import Immutable from 'immutable';

function mapStateToProps(state) {
  return {
    alignment: state.getIn(['familyAndFriends', 'Alignment']),
    family: state.getIn(['familyAndFriends', 'Family']),
    attitude: state.getIn(['familyAndFriends', 'Attitude']),
    occupation: state.getIn(['familyAndFriends', 'Occupation']),
    absentParentFate: state.getIn(['familyAndFriends', 'AbsentParentFate']),
    race: state.getIn(['familyAndFriends', 'Race']),
    childhoodHome: state.getIn(['familyAndFriends', 'ChildhoodHome']),
    childhoodMemories: state.getIn(['familyAndFriends', 'ChildhoodMemories']),
    familyClass: state.getIn(['familyAndFriends', 'Class']),
  };
}

@connect(mapStateToProps, null)
export default class FamilyAndFriendsAccordion extends Component {
  static PropTypes = {
    alignment: PropTypes.String,
    family: PropTypes.String,
    attitude: PropTypes.String,
    occupation: PropTypes.String,
    absentParentFate: PropTypes.Object,
    race: PropTypes.String,
    childhoodHome: PropTypes.String,
    childhoodMemories: PropTypes.String,
    familyClass: PropTypes.String,
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
      alignment,
      family,
      attitude,
      occupation,
      absentParentFate,
      race,
      childhoodHome,
      childhoodMemories,
      familyClass,
    } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        { familyClass.length &&
          <Segment className='segmentBottomMargin' inverted>
            <Accordion inverted>
              <Accordion.Title
                active={ activeIndex[0] }
                id='noClickAccordion'>
                <h4>Family & Friends</h4>
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <h5>Who Raised You</h5>
                <p>
                  { family.get('familyString') }
                </p>
                { (family.get('familyKey') !== '1' &&
                   family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                  <h5>Family & Friends Attitude</h5>
                }
                { (family.get('familyKey') !== '1' &&
                   family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                   <p>
                     { attitude }
                   </p>
                }
                { family.get('familyKey') !== '1' &&
                  <h5>Family & Friends Alignment</h5>
                }
                { family.get('familyKey') !== '1' &&
                  <p>
                    { alignment }
                  </p>
                }
                { (family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '1' &&
                   family.get('familyKey') !== '2' &&
                   family.get('familyKey') !== '45' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                   <h5>Family & Friends Occupation</h5>
                }
                { (occupation !== 'Adventurer' &&
                   family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '1' &&
                   family.get('familyKey') !== '2' &&
                   family.get('familyKey') !== '45' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                    <p>
                      { occupation }
                    </p>
                }
                { (occupation === 'Adventurer' &&
                   family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '1' &&
                   family.get('familyKey') !== '2' &&
                   family.get('familyKey') !== '45' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                  <p>
                    { `${familyClass.get(1)} ${occupation.toLowerCase()}` }
                  </p>
                }
                { (family.get('familyKey') === '3' ||
                   family.get('familyKey') === '67' ||
                   family.get('familyKey') === '2635') &&
                   <h5>Family & Friends Race</h5>
                }
                { (family.get('familyKey') === '3' ||
                   family.get('familyKey') === '67' ||
                   family.get('familyKey') === '2635') &&
                   <p>
                     { race }
                   </p>
                }
                { family.get('familyKey') !== '7600' &&
                  <h5>Absent Parent Fate</h5>
                }
                { (family.get('familyKey') === '3655' || family.get('familyKey') === '5675') &&
                    <p>
                      { `Other parent's fate: ${absentParentFate.get(1)}` }
                    </p>
                }
                { (family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                    <p>
                      { `Mother's fate: ${absentParentFate.get(1)}` }
                    </p>
                }
                { (family.get('familyKey') !== '7600' &&
                   family.get('familyKey') !== '3655' &&
                   family.get('familyKey') !== '5675') &&
                    <p>
                      { `Father's fate: ${absentParentFate.get(2)}` }
                    </p>
                }
                <h5>Childhood Home</h5>
                <p>
                  { childhoodHome }
                </p>
                <h5>Childhood Memories</h5>
                <p>
                  { childhoodMemories }
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
