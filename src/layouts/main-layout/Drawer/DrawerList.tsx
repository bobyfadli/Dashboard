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
        <Stack
          component={Link}
          href={rootPaths.root}
          direction="row"
          alignItems="center"
          columnGap={1.25}
        >
          <Logo sx={{ fontSize: 27 }} />
          <Typography variant="h1" sx={(theme) => ({ color: theme.palette.neutral.darker })}>
            Motiv.
          </Typography>
        </Stack>
        {/* <Link href={rootPaths.root} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Logo width={27} height={27} />
          <Typography variant="h1" sx={(theme) => ({ color: theme.palette.neutral.darker })}>
            Motiv.
          </Typography>
        </Link> */}
      </Toolbar>

      <Stack
        sx={(theme) => ({
          height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
          p: theme.spacing(2, 3),
          justifyContent: 'space-between',
        })}
      >
        <List
          sx={(theme) => ({
            pt: theme.spacing(0),
          })}
        >
          <DrawerListItems
            data={drawerItems.slice(0, -2)}
            selectedIndex={selectedIndex}
            onHandleClick={handleClick}
            open={open}
          ></DrawerListItems>
        </List>
        <List>
          <DrawerListItems
            data={drawerItems.slice(-2)}
            selectedIndex={selectedIndex}
            onHandleClick={handleClick}
            open={open}
          ></DrawerListItems>
        </List>
      </Stack>
    </div>
  );
};

export default DrawerList;
