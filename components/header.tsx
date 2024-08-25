import { Theme } from './theme';

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <p className="text-2xl leading-none">Tournament Drawing</p>
      <Theme />
    </div>
  );
};
