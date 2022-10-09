import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_PAST_SPACE_MISSION, GET_NEXT_SPACE_MISSION } from "./queries";

export const apolloClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit = 1) {
    try {
      const response = await apolloClient.query({
        query: GET_PAST_SPACE_MISSION,
        variables: { limit },
      });
      if (!response || !response.data)
        throw new Error("Cannot get launches list");
      return response.data.launchesPast;
    } catch (err) {
      throw err;
    }
  }
  async getNextSpaceMission() {
    try {
      const response = await apolloClient.query({
        query: GET_NEXT_SPACE_MISSION,
      });
      console.log(response);
      if (!response || !response.data)
        throw new Error("Cannot get launches list");
      return response.data.launchNext;
    } catch (err) {
      throw err;
    }
  }
}

export default new SpaceService();
