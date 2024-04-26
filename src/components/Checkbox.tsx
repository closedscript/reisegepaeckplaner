import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';

type CheckboxProps = {
  label: string
}

export default function MyCheckbox({ label }: CheckboxProps) {

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </FormGroup>
  );
}