import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 52px;
  border-radius: 3px;
  font-weight: 700;
  background: #e2e4e6;
  box-shadow: 0 1px 0 0 #c4c9cc;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 4px;
  padding: 6px 8px 6px 11px;
  text-overflow: ellipsis;
`;
const Select = styled.select`
  border: none;
  cursor: pointer;
  height: 50px;
  left: 10px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
`;

const Label = styled.span`
  color: #8c8c8c;
  display: block;
  font-size: 12px;
  line-height: 14px;
`;
const Display = styled.span`
  display: block;
  font-size: 18px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropDownSelect = ({ label, name, value, handleChange, array }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Display>{value.name}</Display>
    <Select value={value.id} onChange={handleChange} name={label}>
      <optgroup label={label}>
        {array.map(element => {
          return (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          );
        })}
      </optgroup>
    </Select>
  </Wrapper>
);

export default DropDownSelect;
