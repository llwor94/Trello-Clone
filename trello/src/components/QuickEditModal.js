import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
position: static;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: .5;
`

const Input = styled.input`
  position: absolute;
  
  width: 256px;
  background: white;
  margin: auto
`

const QuickEditModal = ({item}) => (
  <ContentContainer>
    <Input />
  </ContentContainer>
)

export default QuickEditModal;