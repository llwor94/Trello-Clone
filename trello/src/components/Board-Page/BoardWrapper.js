import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 790px;
  margin: 80px auto 40px;
`;

const BoardWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default BoardWrapper;
