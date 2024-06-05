import { SyntheticEvent, forwardRef, useState } from 'react';
import { TextField, InputAdornment, IconButton, TextFieldProps } from '@mui/material';
import View from 'components/icons/temp-authentication/View';
import EyeClosed from 'components/icons/temp-authentication/EyeClosed';

const PasswordTextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <TextField
      type={isPasswordVisible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handlePasswordVisibility}>
              {isPasswordVisible ? <View /> : <EyeClosed />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      ref={ref}
      {...props}
    />
  );
});

export default PasswordTextField;
