import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

import { DrawerItem } from 'types/types';
import CollapsedItems from './CollapsedItems';

interface DrawerItemProps {
  data: DrawerItem[];
  open: boolean;
  selectedIndex: number;
  onHandleClick: (index: number, collapsible: boolean) => void;
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
            onClick={() => onHandleClick(option.id, collapsible)}
            component={option.href ? Link : 'div'}
            href={option?.href}
          >
            <ListItemIcon
              sx={(theme) => ({
                marginRight: theme.spacing(1),
              })}
            >
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
            <CollapsedItems
              data={option.subList}
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
