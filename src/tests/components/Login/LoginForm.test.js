import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '@/components/Login/LoginForm';

describe('<LoginForm />', () => {
  it('should render LoginForm component correctly', () => {
    const props = {
      isPending: false,
      onSubmit: jest.fn(),
    };

    const wrapper = mount(<LoginForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
