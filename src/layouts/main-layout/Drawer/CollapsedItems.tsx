import { Collapse, Link, List, ListItemButton, ListItemText } from '@mui/material';
import { SubItem } from 'types/types';

interface CollapsedItemProps {
  subItems: SubItem[] | undefined;
  open: boolean;
  selectedIndex: number;
  onHandleClick: (index: number, collapsible: boolean) => void;
}

const CollapsedItems = ({ subItems, open, selectedIndex, onHandleClick }: CollapsedItemProps) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {subItems?.map((subItem) => (
          <ListItemButton
            key={subItem.id}
            sx={{ pl: 4, mt: 0.5 }}
            selected={selectedIndex === subItem.id}
            onClick={() => onHandleClick(subItem.id, false)}
            component={Link}
            href={subItem.href}
          >
            <ListItemText primary={subItem?.title} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
};

export default CollapsedItems;
