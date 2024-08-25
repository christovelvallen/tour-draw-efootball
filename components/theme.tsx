'use client';

import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    if (theme === 'dark') setTheme('light');
    if (theme === 'light') setTheme('dark');
  };

  return (
    <>
      {mounted ? (
        <Button onClick={handleTheme} variant="light" size="sm" isIconOnly>
          {theme === 'dark' ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </Button>
      ) : null}
    </>
  );
};
