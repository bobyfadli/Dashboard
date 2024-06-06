import { Collapse, Link, List, ListItemButton, ListItemText } from '@mui/material';
import { SubItem } from 'types/types';

interface CollapsedItemProps {
  subItems: SubItem[] | undefined;
  open: boolean;
  selectedItemId: number;
  onHandleListItem: (id: number, collapsible: boolean) => void;
}

const CollapsedItems = ({
  subItems,
  open,
  selectedItemId,
  onHandleListItem,
}: CollapsedItemProps) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {subItems?.map((subItem) => (
          <ListItemButton
            key={subItem.id}
            sx={[subItem.active ? { opacity: 1 } : { opacity: 0.7 }, { pl: 4, mt: 0.5 }]}
            selected={selectedItemId === subItem.id}
            onClick={() => onHandleListItem(subItem.id, false)}
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
