import { useCallback, useEffect, useMemo, useState } from 'react';

import { toast } from 'react-hot-toast';

import { GOERLI_TEST_CHAIN_ID } from '@/constants';
import { getEthereumSafety } from '@/utils/ethereum';

type Props = {};
type ReturnUseWallet = {
  isGoerliTestNetwork: boolean;
  currentAccount: string | undefined;
  currentChainId: string | undefined;
  connectWallet: () => void;
};

export const useWallet = (): ReturnUseWallet => {
  // walletが接続しているアカウントアドレス
  const [currentAccount, setCurrentAccount] = useState<string>();
  // walletが接続しているネットワークのChainID
  const [currentChainId, setCurrentChainId] = useState<string>();

  // ethereum(MetaMask)の呼び出し
  const ethereum = getEthereumSafety();

  // ネットワークに接続しているかの確認
  // @/constantsからNetworkを設定 default=Goerli
  const isGoerliTestNetwork = useMemo(() => {
    return currentChainId === GOERLI_TEST_CHAIN_ID;
  }, [currentChainId]);

  // ethereumアカウント(MetaMask)のセット
  const handleSetAccount = useCallback((accounts: unknown) => {
    if (!Array.isArray(accounts)) return;
    if (!accounts || accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      toast.error('MetaMaskに接続してください');
    }
  }, []);

  // Walletに接続されている場合、現在のethereumアカウント(MetaMask)とネットワークをセット
  const checkIfWalletIsConnected = useCallback(async () => {
    if (!ethereum) return;
    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      if (typeof chainId === 'string') {
        setCurrentChainId(chainId);
      }
      handleSetAccount(accounts);
    } catch (err) {
      toast.error('error');
    }
  }, [ethereum, handleSetAccount]);

  // walletに接続
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        toast.error('Get Metamask!');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      handleSetAccount(accounts);
    } catch (error) {
      toast.error('error');
    }
  };

  useEffect(() => {
    if (!ethereum) return;
    checkIfWalletIsConnected();
    ethereum.on('chainChanged', (chainId) => {
      if (typeof chainId === 'string') {
        setCurrentChainId(chainId);
      }
    });
    ethereum.on('accountsChanged', (args: unknown) => {
      const accounts = args as string[];
      if (accounts && accounts.length > 0) {
        setCurrentAccount(accounts[0] ?? null);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isGoerliTestNetwork,
    currentAccount,
    currentChainId,
    connectWallet,
  };
};
