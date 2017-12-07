import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ResumeProjectsBlock from './ResumeProjectsBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <MemoryRouter location="someLocation" context={{}}>
        <ResumeProjectsBlock
          projects={[]}
          styles={{}}
          formatDate={() => {
          }}
        />
      </MemoryRouter>
    </IntlProvider>, div);
});
