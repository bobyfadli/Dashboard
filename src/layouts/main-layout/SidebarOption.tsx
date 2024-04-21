import {
  Stack,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from '@mui/material';

interface SidebarOptionProps {
  data: {
    id: number;
    icon: (props: SvgIconProps) => JSX.Element;
    title: string;
  }[];
}

const SidebarOption = ({ data }: SidebarOptionProps) => {
  return (
    <Stack spacing={1.25 * 1}>
      {data?.map(({ icon: Icon, ...option }) => (
        <ListItem key={option?.id} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icon height="1.25rem" width="1.25rem" />
            </ListItemIcon>
            <ListItemText primary={option?.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </Stack>
  );
};

export default SidebarOption;
