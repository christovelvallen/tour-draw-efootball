'use client';

import { Button } from '@nextui-org/button';
import { Switch } from '@nextui-org/switch';
import { useAppContext } from '@/contexts';
import { ContextState, EntriesType, ResultsType } from '@/types';
import { Entries } from './entries';
import { Results } from './results';

const shuffleEntries = (
  entries: EntriesType,
  settings: ContextState['settings']
): ResultsType => {
  const shuffleArray = (array: string[]) =>
    array.sort(() => Math.random() - 0.5);
  const shuffledEntries = shuffleArray([...entries]);

  switch (settings.system) {
    case 'single':
      return shuffledEntries.map((entry) => [entry]);
    case 'versus':
      return shuffledEntries.reduce((acc: ResultsType, _, i) => {
        if (i % 2 === 0) acc.push(shuffledEntries.slice(i, i + 2));
        return acc;
      }, []);
    case 'group':
      return shuffledEntries.reduce((acc: ResultsType, _, i) => {
        if (i % settings.countTeam === 0)
          acc.push(shuffledEntries.slice(i, i + settings.countTeam));
        return acc;
      }, []);
    default:
      return shuffledEntries.map((entry) => [entry]);
  }
};

export const Drawing = () => {
  const { state, dispatch } = useAppContext();

  const onDraw = () => {
    if (state.entries.length === 0) return;

    const newResults: ResultsType = shuffleEntries(
      state.entries,
      state.settings
    );

    if (state.settings.showAll) {
      dispatch({
        type: 'SET_DATA_RESULTS',
        payload: [...state.results, ...newResults],
      });
      dispatch({ type: 'SET_DATA_ENTRIES', payload: [] });
    } else {
      if (state.entries.length === 0) return;

      const resultsForDraw = newResults[0] || [];
      dispatch({
        type: 'SET_DATA_RESULTS',
        payload: [...state.results, resultsForDraw],
      });
      const usedEntries = resultsForDraw;
      const remainingEntries = state.entries.filter(
        (entry) => !usedEntries.includes(entry)
      );
      dispatch({ type: 'SET_DATA_ENTRIES', payload: remainingEntries });
    }
  };

  const resetDraw = () => {
    dispatch({ type: 'RESET_DATA_ENTRIES' });
    dispatch({ type: 'RESET_DATA_RESULTS' });
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-content2 rounded-2xl">
      <Entries />
      <Results />
      <div className="flex flex-col items-center justify-center gap-4 pb-2">
        <Button
          onClick={onDraw}
          isDisabled={state.entries.length === 0}
          variant="shadow"
          color="primary"
          size="lg"
        >
          Draw
        </Button>
        <Switch
          isSelected={state.settings.showAll}
          onValueChange={() =>
            dispatch({
              type: 'SET_SETTING_SHOW_ALL',
              payload: !state.settings.showAll,
            })
          }
          size="sm"
        >
          Show all
        </Switch>
        <p className="text-sm leading-none">Remainder {state.entries.length}</p>
        <p
          onClick={resetDraw}
          className="leading-none cursor-pointer text-danger"
        >
          Reset
        </p>
      </div>
    </div>
  );
};
