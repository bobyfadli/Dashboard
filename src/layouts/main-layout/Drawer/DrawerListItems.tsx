import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
    <>
      {data.map(({ icon: Icon, collapsible, ...option }) => (
        <ListItem
          key={option.title}
          disablePadding
          sx={(theme) => ({
            flexDirection: 'column',
            alignItems: 'stretch',
            mb: theme.spacing(1.25),
          })}
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
                    sx={{ pl: 4, mt: 0.5 }}
                    selected={selectedIndex === op.id}
                    onClick={(event) => onHandleClick(event, op.id, false)}
                    component="a"
                    href={op.href}
                  >
                    {/* <ListItemIcon>
                      <Icon fontSize="small" />
                    </ListItemIcon> */}
                    <ListItemText primary={op?.title} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </ListItem>
      ))}
    </>
  );
};

export default DrawerListItems;
