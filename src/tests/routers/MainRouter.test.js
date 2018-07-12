import React from 'react';
import { shallow } from 'enzyme';
import MainRouter from '@/routers/MainRouter';

describe('<MainRouter />', () => {
  it('should render MainRouter component correctly', () => {
    const wrapper = shallow(<MainRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});
