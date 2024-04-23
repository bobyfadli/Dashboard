import { Link, List, Stack, Toolbar, Typography } from '@mui/material';
import DrawerListItems from './DrawerListItems';
import { drawerItems } from 'data/drawerItems';
import { MouseEvent, useState } from 'react';
import Logo from 'components/icons/Logo';
import { rootPaths } from 'routes/paths';

const DrawerList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    _event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Toolbar>
        <Link href={rootPaths.root}>
          <Logo />
        </Link>

        <Typography
          variant="h1"
          sx={(theme) => ({ ml: theme.spacing(1), color: theme.palette.neutral.darker })}
        >
          Motiv.
        </Typography>
      </Toolbar>

      <List
        sx={(theme) => ({
          height: `calc(100vh - ${theme.spacing(9.75)})`,
          p: theme.spacing(2, 6.25, 3.75, 3),
        })}
      >
        <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
          <DrawerListItems
            data={drawerItems.slice(0, 8)}
            selectedIndex={selectedIndex}
            onHandleListItemClick={handleListItemClick}
          ></DrawerListItems>
          <DrawerListItems
            data={drawerItems.slice(-2)}
            selectedIndex={selectedIndex}
            onHandleListItemClick={handleListItemClick}
          ></DrawerListItems>
        </Stack>
      </List>
    </>
  );
};

export default DrawerList;
