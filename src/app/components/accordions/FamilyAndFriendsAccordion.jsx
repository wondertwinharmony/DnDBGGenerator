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
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
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
          <Segment inverted>
            <Accordion inverted>
              <Accordion.Title
                active={ activeIndex[0] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Friends & Family Alignment
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <p>
                  { alignment }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[1] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Family
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[1] }>
                <p>
                  { family }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[2] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Friends & Family Attitude
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[2] }>
                <p>
                  { attitude }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[3] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Friends & Family Occupation
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[3] }>
                <p>
                  { occupation }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[4] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Absent Parent Fate
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[4] }>
                <p>
                  { absentParentFate }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[5] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Friends & Family Race
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[5] }>
                <p>
                  { race }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[6] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Childhood Home
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[6] }>
                <p>
                  { childhoodHome }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[7] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Childhood Memories
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[7] }>
                <p>
                  { childhoodMemories }
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={ activeIndex[8] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Friends & Family Class
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[8] }>
                <p>
                  { familyClass }
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
