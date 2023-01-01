import React, { useCallback } from 'react';

import { toast } from 'react-hot-toast';

import { Button, CurrentAccount, SiteTitle } from '@/components/atoms';
import { MenuList } from '@/components/molecules';
import { menuList } from '@/constants';
import { useMetaMaskContext } from '@/context/MetaMaskContext';

const Header = () => {
  const metaMaskContext = useMetaMaskContext();

  const handleConnectButtonOnClick = useCallback(() => {
    metaMaskContext?.connectWallet();
  }, [metaMaskContext]);

  const handleConnectedButtonOnClick = useCallback(() => {
    toast.success('Already Connected👍');
  }, []);

  const handleChangeNetworkButtonOnClick = useCallback(() => {
    toast.error('Please Change Network!🙏');
  }, []);

  return (
    <>
      <div className=' w-full border-b flex justify-center items-center'>
        <div className='container flex justify-between items-center px-12 py-4 '>
          <SiteTitle siteTitle='Next.js' />
          <MenuList menus={menuList} />
          {!metaMaskContext?.currentAccount ? (
            <Button
              buttonName='🦊 Connect Wallet'
              handleButtonOnClick={handleConnectButtonOnClick}
              className={'btn-metamask'}
            />
          ) : !metaMaskContext?.isGoerliTestNetwork ? (
            <Button
              buttonName='🦊 Change Network!'
              handleButtonOnClick={handleChangeNetworkButtonOnClick}
              className={'btn'}
            />
          ) : (
            <Button
              buttonName='🦊 Connected!'
              handleButtonOnClick={handleConnectedButtonOnClick}
              className={'btn-connected-metamask'}
            />
          )}
        </div>
      </div>
      <CurrentAccount
        currentAccount={
          metaMaskContext && metaMaskContext.currentAccount
            ? metaMaskContext.currentAccount
            : 'Not Connected!'
        }
      />
    </>
  );
};

export default Header;
