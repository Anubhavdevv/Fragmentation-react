import React from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const ChainSelectorModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);

  .chain-list {
    list-style: none;
    padding: 0;

    .chain-item {
      cursor: pointer;
      margin: 10px 0;
      &:hover {
        color: #007bff;
      }
    }
  }
`;

const ChainSelectorModal = ({ open, onClose, chains, selectedChain, onSelectChain }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ChainSelectorModalStyled>
          <h2>Select a Chain</h2>
          <ul className="chain-list">
            {chains.map((chain) => (
              <li
                key={chain.id}
                className={`chain-item ${selectedChain === chain.id ? 'selected' : ''}`}
                onClick={() => onSelectChain(chain.id)}
              >
                {chain.name}
              </li>
            ))}
          </ul>
        </ChainSelectorModalStyled>
      </Fade>
    </Modal>
  );
};

export default ChainSelectorModal;
