import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createStore } from 'redux';

import { meteorClientConfig } from 'meteor/apollo';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

const apolloClient = new ApolloClient(meteorClientConfig());
const defaultState = Meteor.settings.public.defaultState;

export default function ({ reducer }) {
  return {
    Meteor,
    FlowRouter,
    PublicRoutes: FlowRouter.group({name: 'public'}),
    AuthenticatedRoutes: FlowRouter.group({name: 'authenticated'}),
    Store: createStore(reducer, defaultState),
    ApolloClient: apolloClient,
    GraphQL: gql
  };
}
