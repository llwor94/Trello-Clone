import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #026aa7;
  height: 32px;
`

const Header = () => (
  <HeaderWrapper>
    <h2> Trello </h2>
  </HeaderWrapper>
)

export default Header;