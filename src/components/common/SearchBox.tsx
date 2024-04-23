import { Box, IconButton, InputAdornment, TextField, useMediaQuery, useTheme } from '@mui/material';
import Search from 'components/icons/Search';

const SearchBox = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(800)); // 600 sm:660
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {isSmallScreen ? (
        <IconButton color="inherit">
          <Search fontSize="small" />
        </IconButton>
      ) : (
        <TextField
          id="input-with-searchIcon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={(theme) => ({
                  borderRight: theme.shape.borderRadius * 0.5,
                  borderRightColor: theme.palette.warning.main,
                  height: '100%',
                  pr: theme.spacing(2),
                })}
              >
                <Search fontSize="small" />
              </InputAdornment>
            ),
          }}
          type="text"
          variant="filled"
          placeholder="Search or type"
          sx={(theme) => ({
            // width: '22.375rem',
            width: theme.spacing(44.75),
            '& .MuiFilledInput-input::placeholder': {
              color: theme.palette.neutral.main,
              opacity: 1,
            },
          })}
        />
      )}
    </Box>
  );
};

export default SearchBox;
