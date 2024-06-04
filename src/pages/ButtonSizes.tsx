import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Search from 'components/icons/common/Search';
import Lightning from 'components/icons/factor/Lightning';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary">
          Button
        </Button>
        <Button variant="outlined" size="medium" color="secondary">
          Button
        </Button>
        <Button variant="outlined" size="large" color="warning">
          Button
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary">
          Button
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          Button
        </Button>
        <Button variant="contained" size="large" color="warning">
          Button
        </Button>
      </div>
      <div>
        <Button variant="outlined" startIcon={<Search />}>
          Search
        </Button>
        <Button variant="contained" endIcon={<Lightning />}>
          Lightning
        </Button>
      </div>
    </Box>
  );
}
