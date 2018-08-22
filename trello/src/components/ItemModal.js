import React from 'react';
import styled from 'styled-components';
import card from '../assets/card.svg';
import close from '../assets/close.svg'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  cursor: default;
`
const ModalContent = styled.section`
  position: absolute;
  top:30px;
  left:29%;
  width: 768px;
  min-height: 600px;
  text-align: left;
  background-color: #eaecee;
  border-radius: 3px;
  padding: 16px 6px 16px 16px;
`

const ModalHeader = styled.div`
  display: flex;
`

const Icon = styled.img`
  height: 24px;
  color: #999;
  padding-right: 13px;
`
const Close = Icon.extend`
  float: right;
  height: 30px;
  cursor: pointer;
`

const Title = styled.div`
  h2 {
    font-size: 21px;
    line-height: 24px;
    padding-bottom: 5px;
  };
  p {
    color: #8c8c8c;
  }
`

const ItemModal = ({item, handleClose}) => (
  <ModalWrapper>
    <ModalContent>
    <Close src={close} onClick={handleClose}/>
      <ModalHeader>
      <Icon src={card} /><Title><h2>{item.name}</h2><p>in list {item.list}</p></Title>
      </ModalHeader>
    </ModalContent>
  </ModalWrapper>
)

export default ItemModal;