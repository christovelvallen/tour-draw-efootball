'use client';

import { IoCopy } from 'react-icons/io5';
import { Button } from '@nextui-org/button';
import { useAppContext } from '@/contexts';

const DisplayResults = () => {
  const { state } = useAppContext();

  switch (state.settings.system) {
    case 'single':
      return state.results.map((team, teamIndex) => (
        <div key={teamIndex}>
          <p>
            {`Ranking #${teamIndex + 1}`}: {team[0]}
          </p>
        </div>
      ));
    case 'versus':
      return state.results.map((group, groupIndex) => (
        <div key={groupIndex}>
          <p>{`Match #${groupIndex + 1}`}</p>
          <div className="pl-4">
            {group?.map((team, teamIndex) => (
              <p key={teamIndex}>{`Team #${teamIndex + 1}: ${team}`}</p>
            ))}
          </div>
        </div>
      ));
    case 'group':
      return state.results.map((group, groupIndex) => (
        <div key={groupIndex}>
          <p>{`Group #${groupIndex + 1}`}</p>
          <div className="pl-4">
            {group?.map((team, teamIndex) => (
              <p key={teamIndex}>{`Team #${teamIndex + 1}: ${team}`}</p>
            ))}
          </div>
        </div>
      ));

    default:
      return <p>-</p>;
  }
};

export const Results = () => {
  const { state } = useAppContext();

  return (
    <>
      {state.results.length !== 0 ? (
        <div className="relative p-4 shadow-sm bg-content1 rounded-2xl">
          <p className="text-xl leading-none text-default-600">{'Results:'}</p>
          <div className="mt-2">
            <DisplayResults />
          </div>
          <div className="absolute top-0 right-0 pt-2 pr-2">
            <Button isIconOnly variant="flat" color="primary">
              <IoCopy size={20} />
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};
