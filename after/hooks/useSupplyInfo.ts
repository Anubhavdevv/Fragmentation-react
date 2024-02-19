import { useState, useEffect } from 'react';

const useSupplyInfo = (initialChainId) => {
  const [supplies, setSupplies] = useState({ totalSupply: 0, circulatingSupply: 0, circulatingPercent: 0 });
  const [suppliesChain, setSuppliesChain] = useState(initialChainId);
  const [isFetching, setIsFetching] = useState(false);

  const fetchSupplies = async (chainId) => {
    setIsFetching(true);
    setIsFetching(false);
  };

  useEffect(() => {
    if (suppliesChain) {
      fetchSupplies(suppliesChain);
    }
  }, [suppliesChain]);

  return {
    supplies,
    setSuppliesChain,
    isFetching,
    fetchSupplies,
  };
};
