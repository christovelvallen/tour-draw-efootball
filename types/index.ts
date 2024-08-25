export type EntriesType = string[];
export type ResultsType = string[][];
export type SystemType = 'single' | 'versus' | 'group';
export type CountTeamType = 1 | 2 | 3 | 4 | 5 | 6;
export type CountTimeType = 1000 | 2000 | 3000 | 4000 | 5000;

export type ContextAction =
  | { type: 'RESET_DATA_ENTRIES' }
  | { type: 'RESET_DATA_RESULTS' }
  | { type: 'SET_DATA_ENTRIES'; payload: EntriesType }
  | { type: 'SET_DATA_RESULTS'; payload: ResultsType }
  | { type: 'SET_SETTING_SYSTEM'; payload: SystemType }
  | { type: 'SET_SETTING_COUNT_TEAM'; payload: CountTeamType }
  | { type: 'SET_SETTING_COUNT_TIME'; payload: CountTimeType }
  | { type: 'SET_SETTING_SHOW_ALL'; payload: boolean };

export interface ContextState {
  entries: EntriesType;
  results: ResultsType;
  settings: {
    system: SystemType;
    countTeam: CountTeamType;
    countTime: CountTimeType;
    showAll: boolean;
  };
}
