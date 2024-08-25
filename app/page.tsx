'use client';

import { Header } from '@/components/header';
import { Navbar } from '@/components/navbar';

export default function Page() {
  return (
    <div className="w-full h-screen max-w-lg mx-auto">
      <Header />
      <Navbar />
    </div>
  );
}
