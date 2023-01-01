import React, { ReactNode } from 'react';

import { Toaster } from 'react-hot-toast';

import { Header } from '@/components/organisms';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Toaster />
      <Header />
      <main className='container mx-auto'>{children}</main>
    </>
  );
};

export default Layout;
