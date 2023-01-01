// 例）Lock.solのhooks

import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';

import { LOCK_CONTRACT_ADDRESS } from '@/constants';
import LockContractABI from '@/libs/hardhat/artifacts/contracts/Lock.sol/Lock.json';
import type { Lock as LockType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils/ethereum';

const CONTRACT_ADDRESS = LOCK_CONTRACT_ADDRESS;
const CONTRACT_ABI = LockContractABI.abi;

// propsの型
type Props = {};
// returnの型
type ReturnUseLockContract = {
  mining: boolean;
  handleWithdraw: () => void;
};

export const useLockContract = ({}: Props): ReturnUseLockContract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);

  const LockContract: LockType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    ) as LockType;
  }, [ethereum]);

  const handleWithdraw = useCallback(async () => {
    try {
      if (!LockContract) return;
      const withdraw = await LockContract.withdraw();
      setMining(true);
      await withdraw.wait();
      setMining(false);
    } catch (error) {
      toast.error('error');
    }
  }, [LockContract]);

  useEffect(() => {});

  return {
    mining,
    handleWithdraw,
  };
};
