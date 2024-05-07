import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import Search from 'components/icons/Search';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const SearchBox = () => {
  const { down } = useBreakpoints();
  const isSm = down('md'); // md:900

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
                sx={(theme) => ({
                  borderRight: theme.shape.borderRadius * 0.5,
                  borderRightColor: theme.palette.warning.main,
                  height: 22,
                  pr: theme.spacing(2),
                  mr: theme.spacing(0.5),
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
          }}
        />
      )}
    </>
  );
};

export default SearchBox;
