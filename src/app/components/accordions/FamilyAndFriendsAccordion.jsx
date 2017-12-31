import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

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
                <h5>Family</h5>
                <p>
                  { family }
                </p>
                <h5>Family & Friends Attitude</h5>
                <p>
                  { attitude }
                </p>
                <h5>Family & Friends Alignment</h5>
                <p>
                  { alignment }
                </p>
                <h5>Family & Friends Occupation</h5>
                <p>
                  { occupation }
                </p>
                <h5>Family & Friends Race</h5>
                <p>
                  { race }
                </p>
                <h5>Family & Friends Class</h5>
                <p>
                  { familyClass }
                </p>
                <h5>Absent Parent Fate</h5>
                <p>
                  { absentParentFate }
                </p>
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
