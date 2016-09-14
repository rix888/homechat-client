import ChatLayout from '../components/ChatLayout.jsx';
import {useDeps, compose, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const { Store } = context();

  onData(null, {});
}

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(ChatLayout);
