import React from 'react';
import Main from './Main.jsx';
import { shallow } from 'enzyme';

describe('Main component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper).toMatchSnapshot();
  });
});
