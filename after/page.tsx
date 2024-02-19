import React from 'react';
import { useWalletState } from '../after/hooks/useWalletState';
import { useBurnTransactions } from '../after/hooks/useBurnTransactions';
import { useSupplyInfo } from '../after/hooks/useSupplyInfo';

const BurnPage = () => {
  const { walletChain, isWalletConnected, openConnectModal } = useWalletState();
  const { burnAmount, onChangeBurnAmount, executeBurn, burnTxHash, isBurning } = useBurnTransactions();
  const { supplies, fetchSupplies } = useSupplyInfo(walletChain?.id);

  React.useEffect(() => {
    if (walletChain && isWalletConnected) {
      fetchSupplies(walletChain.id);
    }
  }, [walletChain, isWalletConnected, fetchSupplies]);

  return (
    <div>
      <div>
      </div>

      <div>
        <input
          type="text"
          value={burnAmount}
          placeholder="Enter amount to burn"
          onChange={onChangeBurnAmount}
        />
        <button onClick={executeBurn} disabled={isBurning}>
          {isBurning ? 'Burning...' : 'Burn Tokens'}
        </button>
        {burnTxHash && <div>Transaction Hash: {burnTxHash}</div>}
      </div>

      <div>
        <p>Total Supply: {supplies.totalSupply}</p>
        <p>Circulating Supply: {supplies.circulatingSupply}</p>
      </div>

    </div>
  );
};

export default BurnPage;