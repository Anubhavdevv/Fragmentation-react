import { useContext, useCallback } from 'react';
import { WalletContext } from '../context/WalletContext'; 

export const useWalletState = () => {
  const {
    walletAddress,
    isWalletConnected,
    walletBalance,
    isBalanceError,
    openChainModal,
    walletChain,
    chains,
    openConnectModal,
  } = useContext(WalletContext);

  const connectWallet = useCallback(() => {
    if (!isWalletConnected) {
      openConnectModal();
    }
  }, [isWalletConnected,openConnectModal]);

  const selectChain = useCallback(() => {
  openChainModal();
  }, [openChainModal]);
  
  return {
  walletAddress,
  isWalletConnected,
  walletBalance,
  isBalanceError,
  walletChain,
  chains,
  connectWallet,
  selectChain,
  };
  };