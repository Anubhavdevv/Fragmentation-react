import { useState, useCallback } from 'react';

export const useBurnTransactions = () => {
  const [burnAmount, setBurnAmount] = useState('');
  const [burnTransactions, setBurnTransactions] = useState<any[]>([]);
  const [burnTxHash, setBurnTxHash] = useState<string | null>(null);
  const [isBurning, setIsBurning] = useState(false);

  // Function to update the burn amount
  const onChangeBurnAmount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(parseFloat(value)) || value === '') {
      setBurnAmount(value);
    }
  }, []);

  const executeBurn = useCallback(async () => {
    setIsBurning(true);
    setIsBurning(false);
  }, [burnAmount, burnTransactions]);

  return {
    burnAmount,
    onChangeBurnAmount,
    burnTransactions,
    executeBurn,
    burnTxHash,
    isBurning,
  };
};