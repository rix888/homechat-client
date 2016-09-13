import React from 'react';

import { setHeadingTags } from '../../configs/dochead';
import { mount } from 'react-mounter';

import MainLayout from './components/MainLayout.jsx';
import Example from './containers/Example.js';

export default function(injectDeps, { AuthenticatedRoutes }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  AuthenticatedRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Example />)
      });
    }
  });
}
