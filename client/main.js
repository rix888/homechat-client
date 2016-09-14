import initContext from './configs/context';

import { combineReducers } from 'redux';
import { createApp } from 'mantra-core';

import coreModule from './modules/core';
import chatModule from './modules/chat';
import conversationsModule from './modules/conversations';
import navigationModule from './modules/navigation';
import profileModule from './modules/profile';

const reducer = combineReducers({
  ...coreModule.reducers,
  ...chatModule.reducers,
  ...conversationsModule.reducers,
  ...navigationModule.reducers,
  ...profileModule.reducers
});

const context = initContext({ reducer });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(chatModule);
app.loadModule(conversationsModule);
app.loadModule(navigationModule);
app.loadModule(profileModule);

app.init();
