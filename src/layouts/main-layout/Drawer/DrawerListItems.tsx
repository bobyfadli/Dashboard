import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SvgIconProps,
} from '@mui/material';
import { MouseEvent } from 'react';

interface DrawerItemProps {
  data: {
    id: number;
    icon: (props: SvgIconProps) => JSX.Element;
    title: string;
    href: string;
  }[];

  selectedIndex: number;
  onHandleListItemClick: (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    index: number,
  ) => void;
}

const DrawerListItems = ({ data, selectedIndex, onHandleListItemClick }: DrawerItemProps) => {
  return (
    <Stack spacing={1.25}>
      {data?.map(({ icon: Icon, ...option }) => (
        <ListItem key={option?.title} disablePadding>
          <ListItemButton
            selected={selectedIndex === option?.id}
            onClick={(event) => onHandleListItemClick(event, option?.id)}
            component="a"
            href={option?.href}
          >
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={option?.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </Stack>
  );
};

export default DrawerListItems;
