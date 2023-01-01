import React, { ReactNode } from 'react';

import { Toaster } from 'react-hot-toast'

import { Header } from '@/components/organisms';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Toaster />
      <Header />
      {children}
    </>
  );
};

export default Layout;
