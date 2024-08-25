'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import { Drawing } from './drawing';
import { Settings } from './settings';

export const Navbar = () => {
  return (
    <div className="flex flex-col w-full h-full px-4">
      <Tabs
        aria-label="navbar"
        defaultSelectedKey="entries"
        size="lg"
        classNames={{
          tabList: 'w-full grid grid-cols-2',
          panel: 'px-0 py-4',
        }}
      >
        <Tab key="entries" title="Drawing">
          <Drawing />
        </Tab>
        <Tab key="settings" title="Settings">
          <Settings />
        </Tab>
      </Tabs>
    </div>
  );
};
