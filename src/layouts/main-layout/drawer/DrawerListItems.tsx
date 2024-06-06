import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

import { DrawerItem } from 'types/types';
import CollapsedItems from './CollapsedItems';

interface DrawerItemProps {
  drawerItems: DrawerItem[];
  open: boolean;
  selectedItemId: number;
  onHandleListItem: (id: number, collapsible: boolean) => void;
}

const DrawerListItems = ({
  drawerItems,
  selectedItemId,
  onHandleListItem,
  open,
}: DrawerItemProps) => {
  return (
    <>
      {drawerItems.map(({ icon: Icon, collapsible, active, ...drawerItem }) => (
        <ListItem
          key={drawerItem.title}
          disablePadding
          sx={{
            flexDirection: 'column',
            alignItems: 'stretch',
            mb: 1.25,
            opacity: active ? 1 : 0.7,
          }}
        >
          <ListItemButton
            selected={selectedItemId === drawerItem.id}
            onClick={() => onHandleListItem(drawerItem.id, collapsible)}
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
            {collapsible && <IconifyIcon icon={open ? 'ep:arrow-up' : 'ep:arrow-down'} />}
          </ListItemButton>

          {collapsible && (
            <CollapsedItems
              subItems={drawerItem.subList}
              open={open}
              selectedItemId={selectedItemId}
              onHandleListItem={onHandleListItem}
            />
          )}
        </ListItem>
      ))}
    </>
  );
};

export default DrawerListItems;
