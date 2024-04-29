import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent } from 'react';
import { DrawerItem } from 'types';

interface DrawerItemProps {
  data: DrawerItem[];
  open: boolean;
  selectedIndex: number;
  onHandleClick: (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    index: number,
    collapsible: boolean,
  ) => void;
}

const DrawerListItems = ({ data, selectedIndex, onHandleClick, open }: DrawerItemProps) => {
  return (
    <Stack spacing={1.25}>
      {data.map(({ icon: Icon, collapsible, ...option }) => (
        <ListItem
          key={option.title}
          disablePadding
          sx={{ flexDirection: 'column', alignItems: 'stretch' }}
        >
          <ListItemButton
            selected={selectedIndex === option.id}
            onClick={(event) => onHandleClick(event, option.id, collapsible)}
            component="a"
            href={option.href}
          >
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={option.title} />
            {collapsible && open == false ? (
              <IconifyIcon icon="ep:arrow-down" />
            ) : (
              collapsible && open == true && <IconifyIcon icon="ep:arrow-up" />
            )}
          </ListItemButton>
          {collapsible && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {option.subList?.map(({ icon: Icon, ...op }) => (
                  <ListItemButton
                    key={op.id}
                    sx={{ pl: 4 }}
                    selected={selectedIndex === op.id}
                    onClick={(event) => onHandleClick(event, op.id, false)}
                    component="a"
                    href={op.href}
                  >
                    <ListItemIcon>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={op?.title} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </ListItem>
      ))}
    </Stack>
  );
};

export default DrawerListItems;
