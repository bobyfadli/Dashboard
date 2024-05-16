import {
  Collapse,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

import { DrawerItem } from 'types/types';

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
                {option.subList?.map((option) => (
                  <ListItemButton
                    key={option.id}
                    sx={{ pl: 4, mt: 0.5 }}
                    selected={selectedIndex === option.id}
                    onClick={() => onHandleClick(option.id, false)}
                    component={Link}
                    href={option.href}
                  >
                    <ListItemText primary={option?.title} />
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
