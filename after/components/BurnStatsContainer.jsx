import React from 'react';
import styled from 'styled-components';

const StyledBurnStatsContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  .stats-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .chain-info {
      display: flex;
      align-items: center;

      .chain-name {
        margin-left: 10px;
        font-weight: bold;
      }
    }
  }

  .stats-content {
    display: flex;
    justify-content: space-between;

    .stat-group {
      display: flex;
      flex-direction: column;

      .stat-title {
        color: #666;
        font-size: 14px;
      }

      .stat-value {
        font-size: 20px;
        font-weight: bold;
      }

      .stat-percent {
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }

  .progress-bar {
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;

    .progress {
      height: 100%;
      border-radius: 10px;
    }

    .burnt {
      background-color: #ff7043;
      width: ${(props) => props.burntPercent}%;
    }

    .circulating {
      background-color: #4caf50;
      width: ${(props) => 100 - props.burntPercent}%;
    }
  }
`;


const BurnStatsContainer = ({ totalSupply, circulatingSupply, chainName }) => {
  const burntSupply = totalSupply - circulatingSupply;
  const burntPercent = (burntSupply / totalSupply) * 100;

  return (
    <StyledBurnStatsContainer burntPercent={burntPercent}>
      <div className="stats-header">
        <div className="chain-info">
          <img src={`/images/chains/${chainName.toLowerCase()}.png`} alt={chainName} style={{ width: 24, height: 24 }} />
          <span className="chain-name">{chainName}</span>
        </div>
      </div>
      <div className="stats-content">
        <div className="stat-group">
          <span className="stat-title">Total Supply</span>
          <span className="stat-value">{totalSupply.toLocaleString()}</span>
        </div>
        <div className="stat-group">
          <span className="stat-title">Burnt Supply</span>
          <span className="stat-value">{burntSupply.toLocaleString()}</span>
          <span className="stat-percent">{burntPercent.toFixed(2)}%</span>
        </div>
        <div className="stat-group">
          <span className="stat-title">Circulating Supply</span>
          <span className="stat-value">{circulatingSupply.toLocaleString()}</span>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress burnt"></div>
        <div className="progress circulating"></div>
      </div>
    </StyledBurnStatsContainer>
  );
};

export default BurnStatsContainer;
