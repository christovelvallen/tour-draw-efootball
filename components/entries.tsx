'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts';
import { Textarea } from '@nextui-org/input';

export const Entries = () => {
  const { state, dispatch } = useAppContext();
  const [inputValue, setInputValue] = useState<string>('');

  // effect infiniti loop
  // useEffect(() => {
  //   const formattedEntries = state.entries.join('\n');
  //   setInputValue(formattedEntries);
  // }, [state.entries]);

  useEffect(() => {
    const newEntries = inputValue
      .split('\n')
      .filter((line) => line.trim() !== '');
    dispatch({ type: 'SET_DATA_ENTRIES', payload: newEntries });
  }, [inputValue, dispatch]);

  const onChangeInputValue = (value: string) => {
    let fixedValue = value;
    fixedValue = fixedValue.replace(/ {2}/g, '\n'); //Replacing two spaces with a new line
    fixedValue = fixedValue.replace(/^\s*\d+\.\s*/gm, ''); //Remove numbers and dots at the beginning
    fixedValue = fixedValue.replace(/,/g, ''); //Remove commas
    setInputValue(fixedValue);
  };

  const resetInputValue = () => {
    setInputValue('');
    dispatch({ type: 'RESET_DATA_ENTRIES' });
  };

  return (
    <div className="px-2.5 bg-content1 rounded-2xl shadow-sm">
      <Textarea
        minRows={4}
        maxRows={8}
        value={inputValue}
        onValueChange={onChangeInputValue}
        variant="underlined"
        label="Team List"
        className="w-full"
      />
      <div className="flex items-center justify-between px-1 pt-2 pb-3">
        <p className="text-xs">
          Total team:{' '}
          {inputValue.split('\n').filter((line) => line.trim() !== '').length}
        </p>
        <p
          onClick={resetInputValue}
          className="text-xs cursor-pointer text-danger"
        >
          Clear
        </p>
      </div>
    </div>
  );
};
