import { List, Toolbar } from '@mui/material';
import { sidebarOptions } from 'data/dashboard/sidebarOptions';
import { theme } from 'theme/theme';
import SidebarOption from './SidebarOption';

const Sidebar = () => {
  return (
    <>
      <Toolbar sx={{ height: '100vh' }}>
        <List
          sx={{
            color: theme.palette.text.primary,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            marginLeft: 1,
          }}
        >
          <SidebarOption data={sidebarOptions.slice(0, 8)}></SidebarOption>
          <SidebarOption data={sidebarOptions.slice(-2)}></SidebarOption>
        </List>
      </Toolbar>
    </>
  );
};

export default Sidebar;
