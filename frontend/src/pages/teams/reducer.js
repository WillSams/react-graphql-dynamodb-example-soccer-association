import { actionTypes, createPageReducer, onSuccessful } from "../../shared/base";

const initialState = {
  teamId: location?.pathname,
  team: {},
  history,
  location,
  loading: true,
};

const actionHandlers = {
  [onSuccessful(actionTypes.GET_TEAM)]: (state, action) => {
    return {
      ...state,
      teamId: action?.response?.data?.getTeam.Id,
      team: action?.response?.data?.getTeam,
      loading: false,
    };
  },
};

export default createPageReducer(
  actionTypes.TEAMS_PAGE,
  initialState,
  actionHandlers
);