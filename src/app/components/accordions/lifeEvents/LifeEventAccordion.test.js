import React from 'react';
import LifeEventAccordion from './LifeEventAccordion.jsx';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Immutable from 'immutable';

const mockInitialState = Immutable.fromJS({
  lifeEvents: {
    LifeEvents: {
      1: 'Some string',
    },
  },
});

const configStore = configureStore();
const mockStore = configStore(mockInitialState);

const mockProps = { id: '1' };

describe('LifeEventAccordion component', () => {
  it('renders correctly', () => {
    const renderedValue = renderer.create(<LifeEventAccordion { ...mockProps } store={ mockStore } />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
