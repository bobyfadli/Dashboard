import { Link, List, Stack, Toolbar, Typography } from '@mui/material';
import DrawerListItems from './DrawerListItems';
import { drawerItems } from 'data/drawerItems';
import { MouseEvent, useState } from 'react';
import Logo from 'components/icons/Logo';
import { rootPaths } from 'routes/paths';

const DrawerList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false);

  const handleClick = (
    _event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    index: number,
    collapsible: boolean,
  ) => {
    setSelectedIndex(index);
    if (collapsible) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <Toolbar>
        <Link href={rootPaths.root} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Logo width={27} height={27} />
          <Typography variant="h1" sx={(theme) => ({ color: theme.palette.neutral.darker })}>
            Motiv.
          </Typography>
        </Link>
      </Toolbar>

      <List
        sx={(theme) => ({
          height: `calc(100vh - ${theme.spacing(9.75)})`,
          p: theme.spacing(2, 6.25, 3.75, 3),
        })}
      >
        <Stack sx={{ height: 1, justifyContent: 'space-between' }}>
          <DrawerListItems
            data={drawerItems.slice(0, -2)}
            selectedIndex={selectedIndex}
            onHandleClick={handleClick}
            open={open}
          ></DrawerListItems>
          <DrawerListItems
            data={drawerItems.slice(-2)}
            selectedIndex={selectedIndex}
            onHandleClick={handleClick}
            open={open}
          ></DrawerListItems>
        </Stack>
      </List>
    </div>
  );
};

export default DrawerList;
