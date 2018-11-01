import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '@/components/Login/LoginForm';
import { MemoryRouter as Router } from 'react-router-dom';

describe('<LoginForm />', () => {
  it('should render LoginForm component correctly', () => {
    const props = {
      isPending: false,
      onSubmit: jest.fn(),
    };

    const wrapper = mount(
      <Router>
        <LoginForm {...props} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
