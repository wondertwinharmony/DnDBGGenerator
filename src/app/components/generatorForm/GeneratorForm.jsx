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
import { getPersonalDecisions } from '../../thunks/personalDecisionsThunks.js'

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
        raceInput = '';

    if (!randomToggle) {
      console.log('Values from GeneratorForm: ', values.toJS());
      ageInput = values.get('Age');
      backgroundInput = values.get('Background');
      charismaModifierInput = values.get('Charism Modifier');
      classInput = values.get('Class');
      raceInput = values.get('Race');
    }

    getCharacterParents(raceInput);
    getCharacterSiblings(raceInput);
    getCharacterFamilyAndFriends(charismaModifierInput);
    getCharacterLifeEvents(ageInput);
    getCharacterPersonalDecisions({ Background: backgroundInput, CharacterClass: classInput });
  }

  render() {
    const {
      handleSubmit,
      submitting,
      invalid,
    } = this.props;
    const { randomToggle } = this.state;

    return (
      <div>
        <Button secondary disabled={ !randomToggle } onClick={ this.onSubmit }>
          Roll Random
        </Button>
        <Form name='GeneratorForm'>
          <h1>GeneratorForm</h1>
          <Button primary disabled={ invalid || randomToggle } onClick={ handleSubmit(this.onSubmit) }>
            Submit
          </Button>
          <Checkbox
            toggle
            onChange={ this.toggleRandom }
          />
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
            name='Charisma Modifer'
            component={ SemanticFormField }
            as={ Form.Dropdown }
            placeholder='Select Charisma Modifer'
            options={ charismaOptions }
            validate={ [required] }
            disabled={ randomToggle }
            toggleWarning={ randomToggle }
            selection
          />
          <Field
            name='Age'
            type='text'
            as={ Form.Input }
            component={ SemanticFormField }
            placeholder='Age'
            validate={ [required, number, minValue1] }
            disabled={ randomToggle }
            toggleWarning={ randomToggle }
          />
        </Form>
      </div>
    )
  };
}
