// import { MouseEvent, useState } from 'react';

// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import Popover from '@mui/material/Popover';

// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import { account } from '_mock/account';

// // ----------------------------------------------------------------------

// const MENU_OPTIONS = [
//   {
//     label: 'Home',
//     icon: 'eva:home-fill',
//   },
//   {
//     label: 'Profile',
//     icon: 'eva:person-fill',
//   },
//   {
//     label: 'Settings',
//     icon: 'eva:settings-2-fill',
//   },
// ];

// // ----------------------------------------------------------------------

// export default function AccountPopover() {
//   const [open, setOpen] = useState<HTMLElement | null>(null);

//   const handleOpen = (event: MouseEvent<HTMLElement>) => {
//     setOpen(event.currentTarget);
//   };

//   const handleClose = () => {
//     setOpen(null);
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleOpen}
//         sx={{
//           width: 40,
//           height: 40,
//         }}
//       >
//         <Avatar
//           src={account.photoURL}
//           alt={account.displayName}
//           sx={{
//             width: 36,
//             height: 36,
//             border: (theme) => `solid 2px ${theme.palette.background.default}`,
//           }}
//         >
//           {account.displayName.charAt(0).toUpperCase()}
//         </Avatar>
//       </IconButton>

//       <Popover
//         open={!!open}
//         anchorEl={open}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <Box sx={{ my: 1.5, px: 2 }}>
//           <Typography variant="subtitle2" noWrap>
//             {account.displayName}
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
//             {account.email}
//           </Typography>
//         </Box>

//         <Divider sx={{ borderStyle: 'dashed' }} />

//         {MENU_OPTIONS.map((option) => (
//           <MenuItem key={option.label} onClick={handleClose}>
//             {option.label}
//           </MenuItem>
//         ))}

//         <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

//         <MenuItem
//           disableRipple
//           disableTouchRipple
//           onClick={handleClose}
//           sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
//         >
//           Logout
//         </MenuItem>
//       </Popover>
//     </>
//   );
// }
