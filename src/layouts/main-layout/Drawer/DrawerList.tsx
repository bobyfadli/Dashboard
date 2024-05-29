import { Link, List, Stack, Toolbar, Typography } from '@mui/material';
import DrawerListItems from './DrawerListItems';
import { drawerItems } from 'data/drawerItems';
import { useState } from 'react';
import Logo from 'components/icons/common/Logo';
import { rootPaths } from 'routes/paths';

const DrawerList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false);

  const handleClick = (index: number, collapsible: boolean) => {
    setSelectedIndex(index);
    if (collapsible) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <Toolbar disableGutters>
        <Stack
          component={Link}
          href={rootPaths.root}
          direction="row"
          alignItems="center"
          columnGap={1.5}
        >
          <Logo sx={{ fontSize: 27 }} />
          <Typography variant="h2" component="h1" sx={{ color: 'neutral.darker' }}>
            Motiv.
          </Typography>
        </Stack>
      </Toolbar>

      <Stack
        sx={(theme) => ({
          height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
          p: theme.spacing(2, 3),
          justifyContent: 'space-between',
          overflowY: 'auto',
        })}
      >
        <List sx={{ pt: 0 }}>
          <DrawerListItems
            drawerItems={drawerItems.slice(0, -2)}
            selectedIndex={selectedIndex}
            onHandleClick={handleClick}
            open={open}
          />
        </List>

        <List>
          <DrawerListItems
            drawerItems={drawerItems.slice(-2)}
            selectedIndex={selectedIndex}
            onHandleClick={handleClick}
            open={open}
          />
        </List>
      </Stack>
    </div>
  );
};

export default DrawerList;
