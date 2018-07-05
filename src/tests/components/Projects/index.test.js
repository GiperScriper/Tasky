import React from 'react';
import { shallow } from 'enzyme';
import { Projects } from '@/components/Projects';

describe('<Projects />', () => {
  it('should render Projects correctly', () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper).toMatchSnapshot();
  });
});
