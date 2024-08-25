'use client';

import { useAppContext } from '@/contexts';
import { CountTeamType, CountTimeType, SystemType } from '@/types';
import { Button } from '@nextui-org/button';

interface SettingsProps {
  system: { key: SystemType; value: string }[];
  countTime: { key: CountTimeType; value: string }[];
}

const settings: SettingsProps = {
  system: [
    { key: 'single', value: 'Single' },
    { key: 'versus', value: 'Versus' },
    { key: 'group', value: 'Group' },
  ],
  countTime: [
    { key: 1000, value: '1s' },
    { key: 2000, value: '2s' },
    { key: 3000, value: '3s' },
    { key: 4000, value: '4s' },
    { key: 5000, value: '5s' },
  ],
};

export const Settings = () => {
  const { state, dispatch } = useAppContext();
  const { system, countTime, countTeam } = state.settings;

  const setSystem = (value: SystemType) => {
    if (value === 'single') {
      dispatch({ type: 'SET_SETTING_SYSTEM', payload: value });
      dispatch({ type: 'SET_SETTING_COUNT_TEAM', payload: 1 });
    }
    if (value === 'versus') {
      dispatch({ type: 'SET_SETTING_SYSTEM', payload: value });
      dispatch({ type: 'SET_SETTING_COUNT_TEAM', payload: 2 });
    }
    if (value === 'group') {
      dispatch({ type: 'SET_SETTING_SYSTEM', payload: value });
      dispatch({ type: 'SET_SETTING_COUNT_TEAM', payload: 3 });
    }
    dispatch({ type: 'RESET_DATA_RESULTS' });
  };

  const setCountTeam = (value: CountTeamType) => {
    dispatch({ type: 'SET_SETTING_COUNT_TEAM', payload: value });
    dispatch({ type: 'RESET_DATA_RESULTS' });
  };

  const setCountTime = (value: CountTimeType) => {
    dispatch({ type: 'SET_SETTING_COUNT_TIME', payload: value });
    dispatch({ type: 'RESET_DATA_RESULTS' });
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-content2 rounded-2xl">
      <div className="p-4 shadow-sm bg-content1 rounded-2xl">
        <p className="text-lg leading-none text-default-600">System</p>
        <div className="flex gap-2 mt-4">
          {settings?.system?.map((item) => (
            <Button
              onClick={() => setSystem(item.key)}
              key={item.key}
              variant={system === item.key ? 'solid' : 'flat'}
              color="primary"
              className="flex-1"
            >
              {item.value}
            </Button>
          ))}
        </div>
      </div>

      {system === 'group' ? (
        <div className="p-4 shadow-sm bg-content1 rounded-2xl">
          <p className="text-lg leading-none text-default-600">
            Team per group
          </p>
          <div className="flex gap-2 mt-4">
            {Array.from([3, 4, 5, 6], (item: CountTeamType, index: number) => (
              <Button
                onClick={() => setCountTeam(item)}
                key={index}
                variant={countTeam === item ? 'solid' : 'flat'}
                color="primary"
                isIconOnly
                className="flex-1"
              >
                {item} Team
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="p-4 shadow-sm bg-content1 rounded-2xl">
        <p className="text-lg leading-none text-default-600">Time</p>
        <div className="flex gap-2 mt-4">
          {settings?.countTime?.map((item) => (
            <Button
              onClick={() => setCountTime(item.key)}
              key={item.key}
              variant={countTime === item.key ? 'solid' : 'flat'}
              color="primary"
              isIconOnly
              className="flex-1"
            >
              {item.value}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
