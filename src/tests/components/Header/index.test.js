import React from 'react';
import { shallow } from 'enzyme';
import Header from '@/components/Header';

describe('<Header />', () => {
  it('should render Header component correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Link').length).toBe(2);
  });
});
