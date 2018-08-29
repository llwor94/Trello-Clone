import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 8px 16px 8px 8px;
  width: 168px;
`;
const Header = styled.h3`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 20px;
`;

const ModalSidebar = () => (
  <Wrapper>
    <Header>Add to Card</Header>
  </Wrapper>
);

export default ModalSidebar;
