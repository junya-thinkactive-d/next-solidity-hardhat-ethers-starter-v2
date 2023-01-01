import React, { ReactNode, createContext, useContext } from 'react';

import { useWallet } from '@/hooks/useWallets';

type MetaMaskContextType = {
  currentAccount: string | undefined;
  currentChainId:string | undefined;
  connectWallet: () => void;
  isGoerliTestNetwork:boolean;
};

type Props = {
  children: ReactNode;
};

// Contextの設定
const MetaMaskCtx = createContext<MetaMaskContextType | null>(null);

// _appファイルで使用
const MetaMaskProvider = ({ children }: Props) => {
  const { currentAccount,currentChainId, connectWallet, isGoerliTestNetwork } = useWallet();
  const metaMaskState = { currentAccount,currentChainId, connectWallet, isGoerliTestNetwork };
  return (
    <MetaMaskCtx.Provider value={metaMaskState}>
      {children}
    </MetaMaskCtx.Provider>
  );
};

export default MetaMaskProvider;

// Contextのhooks
export const useMetaMaskContext = () => {
  return useContext(MetaMaskCtx);
};
