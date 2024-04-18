import { Box, InputAdornment, TextField } from '@mui/material';
import IconifyIcon from './base/IconifyIcon';
import { theme } from 'theme/theme';

const InputWithSearchIcon = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconifyIcon
                icon="ep:search"
                height="1.25rem"
                width="1.25rem"
                color={theme.palette.neutral.main}
              />
            </InputAdornment>
          ),
        }}
        type="text"
        variant="filled"
        placeholder="Search or type"
      />
    </Box>
  );
};

export default InputWithSearchIcon;
