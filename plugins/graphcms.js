import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cko6wxfxovarj01xt7hn3e1x6/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};
