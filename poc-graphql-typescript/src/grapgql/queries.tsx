import gql from "graphql-tag";

export const GET_PAST_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      ships {
        image
      }
      launch_date_utc
    }
  }
`;

export const GET_NEXT_SPACE_MISSION = gql`
  query GetNextSpaceMission {
    launchNext {
      mission_name
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      ships {
        image
      }
      launch_date_utc
    }
  }
`;
