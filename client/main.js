import initContext from './configs/context';

import { combineReducers } from 'redux';
import { createApp } from 'mantra-core';

// import modules
import coreModule from './modules/core';

const coreReducers = coreModule.reducers;

const reducer = combineReducers({
  ...coreReducers,
});

// init context
const context = initContext({ reducer });

// Start App
const app = createApp(context);

// Load modules
app.loadModule(coreModule);

app.init();
