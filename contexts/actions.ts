import { ContextAction, ContextState } from '@/types';

export const initialState: ContextState = {
  entries: [],
  results: [],
  settings: {
    system: 'single',
    countTeam: 1,
    countTime: 1000,
    showAll: false,
  },
};

export function reducer(
  state: ContextState,
  action: ContextAction
): ContextState {
  switch (action.type) {
    case 'RESET_DATA_ENTRIES':
      return {
        ...state,
        entries: [],
      };
    case 'RESET_DATA_RESULTS':
      return {
        ...state,
        results: [],
      };
    case 'SET_DATA_ENTRIES':
      return {
        ...state,
        entries: action.payload,
      };
    case 'SET_DATA_RESULTS':
      return {
        ...state,
        results: action.payload,
      };
    case 'SET_SETTING_SYSTEM':
      return {
        ...state,
        settings: {
          ...state.settings,
          system: action.payload,
        },
      };
    case 'SET_SETTING_COUNT_TEAM':
      return {
        ...state,
        settings: {
          ...state.settings,
          countTeam: action.payload,
        },
      };
    case 'SET_SETTING_COUNT_TIME':
      return {
        ...state,
        settings: {
          ...state.settings,
          countTime: action.payload,
        },
      };
    case 'SET_SETTING_SHOW_ALL':
      return {
        ...state,
        settings: {
          ...state.settings,
          showAll: action.payload,
        },
      };
    default:
      return state;
  }
}
