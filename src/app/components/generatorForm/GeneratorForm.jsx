import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  reduxForm,
  initialize,
} from 'redux-form/immutable';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Dropdown,
} from 'semantic-ui-react';
import SemanticFormField from '../common/SemanticFormField.jsx';
import { required, number, minValue1 } from '../../utils/validation.js';
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
import { getPersonalDecisions } from '../../thunks/personalDecisionsThunks.js';
import ClassImage from '../classImage/ClassImage.jsx';

const race = {
  1: 'Human',
  2: 'Dwarf',
  3: 'Elf',
  4: 'Halfling',
  5: 'Dragonborn',
  6: 'Gnome',
  7: 'Half-elf',
  8: 'Half-orc',
  9: 'Tiefling',
};

const formObject = {
  form: 'GeneratorForm',
  getFormState: state => state.get('form'),
};

function mapDispatchToProps(dispatch) {
  return {
    getCharacterParents: bindActionCreators(getParents, dispatch),
    getCharacterSiblings: bindActionCreators(getSiblings, dispatch),
    getCharacterFamilyAndFriends: bindActionCreators(getFamilyAndFriends, dispatch),
    getCharacterLifeEvents: bindActionCreators(getLifeEvents, dispatch),
    getCharacterPersonalDecisions: bindActionCreators(getPersonalDecisions, dispatch),
    initializeForm: bindActionCreators(initialize, dispatch),
  };
}

@connect(null, mapDispatchToProps)
@reduxForm(formObject)
export default class GeneratorForm extends Component {
  static PropTypes = {
    getCharacterParents: PropTypes.func,
    getCharacterSiblings: PropTypes.func,
    getCharacterFamilyAndFriends: PropTypes.func,
    getCharacterLifeEvents: PropTypes.func,
    getCharacterPersonalDecisions: PropTypes.func,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    initializeForm: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = { randomToggle: false };
  }

  toggleRandom = () => {
    const { randomToggle } = this.state;
    const { initializeForm } = this.props;

    this.setState({ randomToggle: !randomToggle });
    initializeForm({form:'GeneratorForm', object: {}, keepDirty: false});
  }

  onSubmit = (values) => {
    const {
      getCharacterParents,
      getCharacterSiblings,
      getCharacterFamilyAndFriends,
      getCharacterLifeEvents,
      getCharacterPersonalDecisions,
    } = this.props;

    const {
      randomToggle
    } = this.state;

    let ageInput = '',
        backgroundInput = '',
        charismaModifierInput = '',
        classInput = '',
        raceInput = race[Math.floor(Math.random() * 9) + 1];

    if (!randomToggle) {
      ageInput = values.get('Age');
      backgroundInput = values.get('Background');
      charismaModifierInput = values.get('Charisma');
      classInput = values.get('Class');
      raceInput = values.get('Race');
    }

    getCharacterParents(raceInput);
    getCharacterSiblings(raceInput);
    getCharacterFamilyAndFriends(charismaModifierInput);
    getCharacterLifeEvents(ageInput);
    getCharacterPersonalDecisions({ background: backgroundInput, characterClass: classInput, characterRace: raceInput });
  }

  render() {
    const {
      handleSubmit,
      submitting,
      invalid,
    } = this.props;
    const { randomToggle } = this.state;

    return (
      <div className='generatorFormContainer'>
        <Form name='GeneratorForm'>
          <h2>Character Details</h2>
          <p>Click the toggle to enable random character generation or input your character's details to generate background.</p>
          <div className='fieldContainer'>
            <div className='randomRoll'>
              <Checkbox
                toggle
                onChange={ this.toggleRandom }
                />
              <Button secondary disabled={ !randomToggle } onClick={ this.onSubmit }>
                Roll Random
              </Button>
            </div>
            <Field
              name='Race'
              component={ SemanticFormField }
              as={ Form.Dropdown }
              placeholder='Select Race'
              options={ raceOptions }
              validate={ [required] }
              disabled={ randomToggle }
              toggleWarning={ randomToggle }
              selection
              />
            <Field
              name='Class'
              component={ SemanticFormField }
              as={ Form.Dropdown }
              placeholder='Select Class'
              options={ classOptions }
              validate={ [required] }
              disabled={ randomToggle }
              toggleWarning={ randomToggle }
              selection
              />
            <Field
              name='Background'
              component={ SemanticFormField }
              as={ Form.Dropdown }
              placeholder='Select Background'
              options={ backgroundOptions }
              validate={ [required] }
              disabled={ randomToggle }
              toggleWarning={ randomToggle }
              selection
              />
            <Field
              name='Charisma'
              component={ SemanticFormField }
              as={ Form.Dropdown }
              placeholder='Select CHA Modifer'
              options={ charismaOptions }
              validate={ [required] }
              disabled={ randomToggle }
              toggleWarning={ randomToggle }
              selection
              />
            <Field
              id='ageInputField'
              name='Age'
              type='text'
              as={ Form.Input }
              component={ SemanticFormField }
              placeholder='Age'
              validate={ [required, number, minValue1] }
              disabled={ randomToggle }
              toggleWarning={ randomToggle }
              />
          </div>
          <Button primary disabled={ invalid || randomToggle } onClick={ handleSubmit(this.onSubmit) }>
            Submit
          </Button>
        </Form>
        <div className='classImage'>
          <p><b>Class Symbol</b></p>
          <ClassImage/>
        </div>
      </div>
    )
  };
}
