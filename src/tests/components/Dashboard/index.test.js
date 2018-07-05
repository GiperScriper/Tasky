import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '@/components/Dashboard';

describe('<Dashboard />', () => {
  it('should render Dashboard component correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
