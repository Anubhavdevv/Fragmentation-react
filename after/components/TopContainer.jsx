import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const TopContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  width: 100%;

  .info_box {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background-color: #f2f2f2;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .title {
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    .description {
      margin-bottom: 20px;
      font-size: 16px;
    }

    .input_value_box {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .input_value {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #cccccc;
        font-size: 16px;
      }
    }

    .burn_button {
      margin-top: 20px;
    }
  }
`;


const TopContainer = ({ burnAmount, setBurnAmount, executeBurn, txButton, txProgress }) => {
  return (
    <TopContainerStyled>
      <div className="info_box">
        <h1 className="title">App TOKEN BURN</h1>
        <p className="description">
          "The process of reducing the supply of App tokens by permanently removing a certain number of them from circulation, often through a deliberate and recorded mechanism."
        </p>
        <div className="input_value_box">
          <p className="input_muted">Enter amount to Burn</p>
          <input
            className="input_value"
            type="text"
            value={burnAmount}
            placeholder="0.00"
            onChange={(e) => setBurnAmount(e.target.value)}
          />
        </div>
        <Button
          className="burn_button"
          variant="outlined"
          onClick={executeBurn}
          startIcon={txProgress ? <CircularProgress size={20} color="inherit" /> : null}
          disabled={txProgress}
        >
          {txButton}
        </Button>
      </div>
    </TopContainerStyled>
  );
};

export default TopContainer;
