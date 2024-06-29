import React from 'react';
import { Grid, TextField } from '@mui/material';

const InputField = ({ name, label, value, onChange, required, type }) => {
  return (
    <Grid item xs={12}>
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        required={required}
        type={type}
        InputLabelProps={type === 'date' ? { shrink: true } : undefined}
        multiline={type === 'textarea'}
        rows={type === 'textarea' ? 4 : undefined}
      />
    </Grid>
  );
};

export default InputField;
