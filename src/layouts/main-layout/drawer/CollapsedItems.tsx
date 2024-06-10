import { Collapse, Link, List, ListItemButton, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { SubItem } from 'types/types';

interface CollapsedItemProps {
  subItems: SubItem[] | undefined;
  open: boolean;
}

const CollapsedItems = ({ subItems, open }: CollapsedItemProps) => {
  const location = useLocation();

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {subItems?.map((subItem) => (
          <ListItemButton
            key={subItem.id}
            selected={location.pathname === subItem.path}
            component={subItem.path ? Link : 'div'}
            href={subItem.path}
            sx={[subItem.active ? { opacity: 1 } : { opacity: 0.7 }, { pl: 4, mt: 0.5 }]}
          >
            <ListItemText primary={subItem?.title} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
};

export default CollapsedItems;
