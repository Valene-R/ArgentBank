import { Root, Label, Input, ErrorMessage } from './field.styled';

export const Field = ({ type, id, label, register, validation, onFocus, errorMessage }) => {
  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} {...register(id, validation)} onFocus={onFocus} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Root>
  ); 
};

export default Field;