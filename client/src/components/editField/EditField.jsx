import { forwardRef } from 'react';
import { Field, Label, Input } from './editField.styled';

const EditField = forwardRef(({ id, name, label, value, onChange }, ref) => (
  <Field>
    <Label htmlFor={id} className="sr-only">{label}</Label>
    <Input
      type="text"
      id={id}
      name={name}
      placeholder={label}
      onChange={e => onChange(e)}
      defaultValue={value} // Ajout de default pour éviter les conflits
      ref={ref}
    />
  </Field>
));

export default EditField;