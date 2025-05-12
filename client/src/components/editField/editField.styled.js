import styled from 'styled-components';

export const Field= styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  color: #FFF;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  padding-right: 10px;

  &.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const Input = styled.input`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f5f5f5; 
  color:rgb(122, 118, 123)
  width: 100%;
  
  &::placeholder {
    color: rgb(122, 118, 123); 
  }

  &:focus {
    background-color: #FFFFFF;
    border: 2px solid rgb(122, 118, 123); 
    outline: none;
  }
`;