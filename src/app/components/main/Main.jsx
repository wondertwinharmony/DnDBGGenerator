import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import GeneratorForm from '../generatorForm/GeneratorForm.jsx';
import ParentsAccordion from '../accordions/ParentsAccordion.jsx';
import SiblingsAccordion from '../accordions/siblings/SiblingsAccordion.jsx';
import FamilyAndFriendsAccordion from '../accordions/FamilyAndFriendsAccordion.jsx';
import LifeEventsAccordion from '../accordions/lifeEvents/LifeEventsAccordion.jsx';
import PersonalDecisionsAccordion from '../accordions/PersonalDecisionsAccordion.jsx';
import ClassImage from '../classImage/ClassImage.jsx';

export default class Main extends Component {

  render() {
    return (
      <div className='mainContainer'>
        <GeneratorForm/>
        <PersonalDecisionsAccordion/>
        <ParentsAccordion/>
        <SiblingsAccordion/>
        <FamilyAndFriendsAccordion/>
        <LifeEventsAccordion/>
      </div>
    )
  };
}
