import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

import { DrawerItem } from 'types/types';
import CollapsedItems from './CollapsedItems';

interface DrawerItemProps {
  drawerItems: DrawerItem[];
  open: boolean;
  selectedIndex: number;
  onHandleClick: (index: number, collapsible: boolean) => void;
}

const DrawerListItems = ({ drawerItems, selectedIndex, onHandleClick, open }: DrawerItemProps) => {
  return (
    <>
      {drawerItems.map(({ icon: Icon, collapsible, ...drawerItem }) => (
        <ListItem
          key={drawerItem.title}
          disablePadding
          sx={{
            flexDirection: 'column',
            alignItems: 'stretch',
            mb: 1.25,
          }}
        >
          <ListItemButton
            selected={selectedIndex === drawerItem.id}
            onClick={() => onHandleClick(drawerItem.id, collapsible)}
            component={drawerItem.href ? Link : 'div'}
            href={drawerItem?.href}
          >
            <ListItemIcon
              sx={{
                mr: 1,
              }}
            >
              <Icon fontSize="small" />
            </ListItemIcon>

            <ListItemText primary={drawerItem.title} />
            {collapsible && open == false ? (
              <IconifyIcon icon="ep:arrow-down" />
            ) : (
              collapsible && open == true && <IconifyIcon icon="ep:arrow-up" />
            )}
          </ListItemButton>

          {collapsible && (
            <CollapsedItems
              subItems={drawerItem.subList}
              open={open}
              selectedIndex={selectedIndex}
              onHandleClick={onHandleClick}
            />
          )}
        </ListItem>
      ))}
    </>
  );
};

export default DrawerListItems;
