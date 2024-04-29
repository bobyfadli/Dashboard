import { IconButton, InputAdornment, TextField, useMediaQuery, useTheme } from '@mui/material';
import Search from 'components/icons/Search';

const SearchBox = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // 600 sm:660 md:900
  return (
    <>
      {isSmallScreen ? (
        <IconButton color="inherit" aria-label="search-icon">
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
                  height: 1,
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
          sx={{
            width: 358,
            // bgcolor: theme.palette.primary.main,
          }}
        />
      )}
    </>
  );
};

export default SearchBox;
