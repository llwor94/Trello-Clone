import React from "react";
import styled from "styled-components";
import labels from '../assets/labels.svg';
import check from '../assets/check.svg';
import clock from '../assets/clock.svg';

const Wrapper = styled.div`
  padding: 8px 16px 8px 8px;
  width: 168px;
  float: right;
  box-sizing: content-box;
`;
const Header = styled.h3`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  font-weight: 700;
  background: #e2e4e6;
  box-shadow: 0 1px 0 0 #c4c9cc;
  cursor: pointer;
  height: 32px;
  margin-top: 8px;
  max-width: 300px;
  padding: 6px 8px 6px 11px;
`;

const Icon = styled.img`
  height: 20px;
  padding-right: 5px;
`

const ModalSidebar = () => (
  <Wrapper>
    <Header>Add to Card</Header>
    <div>
      <Button><Icon src={labels}/><p>Labels</p></Button>
      <Button><Icon src={check}/><p>Check List</p></Button>
      <Button><Icon src={clock}/><p>Due Date</p></Button>
    </div>
  </Wrapper>
);

export default ModalSidebar;
