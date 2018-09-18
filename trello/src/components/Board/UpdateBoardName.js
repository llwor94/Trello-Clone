import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Form = styled.form`
  width: 100%;
  padding: 0 12px 12px;
`;

const Label = styled.label`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

const Input = styled.input`
  width: 100%;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  padding: 6px 8px;
  margin: 0 0 12px;
`;

const UpdateBoardName = ({ handleSubmit, value, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Label>Name</Label>
    <Input type="text" value={value} onChange={handleChange} />
    <Button value="Rename" />
  </Form>
);

export default UpdateBoardName;
