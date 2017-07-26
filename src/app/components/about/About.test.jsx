import React from 'react';
import About from './About.jsx';
import { shallow } from 'enzyme';

describe('About component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper).toMatchSnapshot();
  });
});
