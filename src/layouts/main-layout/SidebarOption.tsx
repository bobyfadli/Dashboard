import {
  Stack,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
  Link,
} from '@mui/material';

interface SidebarOptionProps {
  data: {
    id: number;
    icon: (props: SvgIconProps) => JSX.Element;
    title: string;
    href: string;
  }[];
}

const SidebarOption = ({ data }: SidebarOptionProps) => {
  return (
    <Stack spacing={1.25 * 1}>
      {data?.map(({ icon: Icon, ...option }) => (
        <Link key={option?.id} href={option?.href}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon height="1.25rem" width="1.25rem" />
              </ListItemIcon>
              <ListItemText primary={option?.title} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </Stack>
  );
};

export default SidebarOption;
