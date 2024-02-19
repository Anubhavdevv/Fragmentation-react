import React from 'react';
import styled from 'styled-components';

const TransactionTableStyled = styled.div`
  width:100%;
  margin-top: 20px;
overflow-x: auto;

.transaction-table-header {
display: flex;
justify-content: space-between;
padding: 10px;
background-color: #f7f7f7;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
font-weight: bold;
}

.transaction-table-row {
display: flex;
justify-content: space-between;
padding: 10px;
border-bottom: 1px solid #eaeaea;
&:last-child {
    border-bottom: none;
  }
}

.transaction-hash {
color: #007bff;
cursor: pointer;
text-decoration: underline;
&:hover {
    text-decoration: none;
  }
}
`;


const TransactionTable = ({ burnTransactions, priceUSD }) => {
    const formatDate = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        return date.toLocaleDateString();
    };

    return (
        <TransactionTableStyled>
            <div className="transaction-table-header">
                <span>Transaction Hash</span>
                <span>Amount Burned</span>
                <span>Date</span>
            </div>
            {burnTransactions.map((tx, index) => (
                <div key={index} className="transaction-table-row">
                    <span className="transaction-hash">{tx.hash}</span>
                    <span>{tx.amount.toFixed(2)} Tokens</span>
                    <span>{formatDate(tx.timeStamp)}</span>
                </div>
            ))}
        </TransactionTableStyled>
    );
};

export default TransactionTable;