import { Collapse, Link, List, ListItemButton, ListItemText } from '@mui/material';
import { SubItem } from 'types/types';

interface CollapsedItemProps {
  data: SubItem[] | undefined;
  open: boolean;
  selectedIndex: number;
  onHandleClick: (index: number, collapsible: boolean) => void;
}

const CollapsedItems = ({ data, open, selectedIndex, onHandleClick }: CollapsedItemProps) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {data?.map((item) => (
          <ListItemButton
            key={item.id}
            sx={{ pl: 4, mt: 0.5 }}
            selected={selectedIndex === item.id}
            onClick={() => onHandleClick(item.id, false)}
            component={Link}
            href={item.href}
          >
            <ListItemText primary={item?.title} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
};

export default CollapsedItems;
