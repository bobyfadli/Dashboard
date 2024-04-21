import { Box, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import IconifyIcon from './base/IconifyIcon';
import { theme } from 'theme/theme';

const InputWithSearchIcon = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // 600 660
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {isSmallScreen ? (
        <IconifyIcon
          icon="ep:search"
          height="1.25rem"
          width="1.25rem"
          color={theme.palette.neutral.main}
        />
      ) : (
        <TextField
          id="input-with-searchIcon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  borderRight: '2px solid #EF9011',
                  height: '100%',
                  paddingRight: 2,
                }}
              >
                <IconifyIcon
                  icon="ep:search"
                  height="1.375rem"
                  width="1.375rem"
                  color={theme.palette.neutral.main}
                />
              </InputAdornment>
            ),
          }}
          type="text"
          variant="filled"
          placeholder="Search or type"
          sx={{ width: '22.375rem' }}
        />
      )}
    </Box>
  );
};

export default InputWithSearchIcon;
