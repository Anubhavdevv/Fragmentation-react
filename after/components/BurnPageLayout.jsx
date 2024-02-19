import React from 'react';
import styled from 'styled-components';

const BurnPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  gap: 20px;

  .burn-page-layout {
    width: 100%;
    max-width: 1200px; // Adjust the max width as needed
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
  }
`;

const BurnPageLayout = ({ children }) => {
  return (
    <BurnPageStyled>
      <div className="burn-page-layout">{children}</div>
    </BurnPageStyled>
  );
};

export default BurnPageLayout;
