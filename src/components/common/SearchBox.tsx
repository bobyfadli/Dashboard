import { IconButton, InputAdornment, Stack, TextField, useTheme } from '@mui/material';
import Search from 'components/icons/Common/Search';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const SearchBox = () => {
  const theme = useTheme();

  const { down } = useBreakpoints();
  const isSm = down('md');

  return (
    <>
      {isSm ? (
        <Stack justifyContent="center">
          <IconButton color="inherit" aria-label="search-icon">
            <Search fontSize="small" />
          </IconButton>
        </Stack>
      ) : (
        <TextField
          id="input-with-searchIcon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  borderRight: theme.shape.borderRadius * 0.5,
                  borderRightColor: theme.palette.warning.light,
                  height: 20,
                  pr: theme.spacing(1),
                  mr: theme.spacing(1),
                  color: theme.palette.neutral.main,
                }}
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
          }}
        />
      )}
    </>
  );
};

export default SearchBox;
