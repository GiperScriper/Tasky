import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from '@/components/Projects/ProjectList';
import projects from '@/tests/fixtures/projects';

describe('<ProjectList />', () => {
  it('should render ProjectList component with projects data', () => {
    const wrapper = shallow(<ProjectList projects={projects} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ProjectList with empty data', () => {
    const wrapper = shallow(<ProjectList />);
    expect(wrapper).toMatchSnapshot();
  });
});
