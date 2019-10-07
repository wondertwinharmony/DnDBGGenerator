import React from 'react';
import SiblingAccordion from './SiblingAccordion.jsx';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Immutable from 'immutable';

const mockInitialState = Immutable.fromJS({
  siblings: {
    BirthOrder: {
      1: 'Younger',
    },
    Occupation: {
      1: 'Laborer',
    },
    Alignment: {
      1: 'Neutral',
    },
    Status: {
      1: 'Missing or unknown',
    },
    Attitude: {
      1: 'Friendly',
    },
    Class: {
      1: 'Rogue',
    }
  }
});

const configStore = configureStore();
const mockStore = configStore(mockInitialState);

const mockProps = { id: '1' };

describe('SiblingAccordion component', () => {
  it('renders correctly', () => {
    const renderedValue = renderer.create(<SiblingAccordion { ...mockProps } store={ mockStore } />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  it('sets state when clicked', () => {
    const wrapper = shallow(<SiblingAccordion { ...mockProps } store={ mockStore } />);
    wrapper.find({ 'data-id': 'siblingAccordion' }).simulate('click');
  });
});
