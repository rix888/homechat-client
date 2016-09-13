import Example from '../components/Example.jsx';
import {useDeps, compose, composeAll} from 'mantra-core';


export const mapLocalStateToProps = ({context}, onData) => {
  const { Store } = context();
  const { exampleText } = Store.getState();

  onData(null, {exampleText});
}

export const mapRemoteStateToProps = ({context}, onData) => {
  const { ApolloClient, GraphQL } = context();

  // TODO: Query
  const query = GraphQL`
  `;
}

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(Example);
