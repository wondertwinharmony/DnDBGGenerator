import React from 'react';
import { Component, PropTypes } from 'react';
import {
  formValues,
  Field,
  reduxForm,
} from 'redux-form/immutable';
import {
  Input,
  Button,
  Dropdown,
} from 'semantic-ui-react';
import { ReduxFormDropdown } from '../common/ReduxFormDropdown.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  classOptions,
  raceOptions,
  backgroundOptions,
  charismaOptions,
} from '../../constants/constants.js';
import { getParents } from '../../thunks/parentsThunks.js';
import { getSiblings } from '../../thunks/siblingsThunks.js';
import { getLifeEvents } from '../../thunks/lifeEventsThunks.js';
import { getFamilyAndFriends } from '../../thunks/familyAndFriendsThunks.js';
import { getPersonalDecisions } from '../../thunks/personalDecisionsThunks.js'

const formObject = {
  form: 'About',
  getFormState: state => state.get('form'),
};

function mapDispatchToProps(dispatch) {
  return {
    getCharacterParents: bindActionCreators(getParents, dispatch),
    getCharacterSiblings: bindActionCreators(getSiblings, dispatch),
    getCharacterFamilyAndFriends: bindActionCreators(getFamilyAndFriends, dispatch),
    getCharacterLifeEvents: bindActionCreators(getLifeEvents, dispatch),
    getCharacterPersonalDecisions: bindActionCreators(getPersonalDecisions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    formValues: state.getIn(['form', 'About', 'values']),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(formObject)
export default class About extends Component {
  static PropTypes = {
    getCharacterParents: PropTypes.func,
    getCharacterSiblings: PropTypes.func,
    getCharacterFamilyAndFriends: PropTypes.func,
    getCharacterLifeEvents: PropTypes.func,
    getCharacterPersonalDecisions: PropTypes.func,
    formValues: PropTypes.list,
  }

  handleButtonClick = () => {
    const {
      getCharacterParents,
      getCharacterSiblings,
      getCharacterFamilyAndFriends,
      getCharacterLifeEvents,
      getCharacterPersonalDecisions,
    } = this.props;

    getCharacterParents();
    getCharacterSiblings();
    getCharacterFamilyAndFriends();
    getCharacterLifeEvents();
    getCharacterPersonalDecisions();
  }

  render() {
    const { formValues } = this.props;
    const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
    console.log(formValues ? formValues.toJS() : 'narp');
    return (
      <div className="container about">
        <h1>About</h1>
        <Button onClick={ this.handleButtonClick }>
          Click
        </Button>
        <Field
          name='Race'
          component={ ReduxFormDropdown }
          options={ raceOptions }
          placeholder='Select Race'
          onChange={ () => {} }
          disabled={ false }
          selection
        />
        <Field
         name="Class"
         component={ ReduxFormDropdown }
         placeholder="Select Class"
         options={ classOptions }
         disabled={ false }
         selection
        />
        <Field
         name="Background"
         component={ ReduxFormDropdown }
         placeholder="Select Background"
         options={ backgroundOptions }
         disabled={ false }
         selection
        />
        <Field
         name="Charisma Modifer"
         component={ ReduxFormDropdown }
         placeholder="Select Charisma Modifer"
         options={ charismaOptions }
         disabled={ false }
         selection
        />
        <Field
          name="Age"
          type="number"
          component={ Input }
          label="Age"
          validate={ [number] }
        />
      </div>
    )
  };
}
