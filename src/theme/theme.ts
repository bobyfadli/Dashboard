import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import AppBar from './components/AppBar';
import Link from './components/Link';
import ListItemButton from './components/ListItemButton';
import ListItemText from './components/ListItemText';
import ListItemIcon from './components/ListItemIcon';
import Toolbar from './components/Toolbar';
import Paper from './components/Paper';
import Stack from './components/Stack';
import FilledInput from './components/FilledInput';
import InputAdornment from './components/InputAdornment';
import Button from './components/Button';
import Drawer from './components/Drawer';
import InputBase from './components/InputBase';
import Input from './components/Input';
import ButtonBase from './components/ButtonBase';
import IconButton from './components/IconButton';
import TextField from './components/TextField';

export const theme = createTheme({
  palette,
  typography,
  // unstable_sxConfig: sxConfig,
  components: {
    MuiAppBar: AppBar,
    MuiPaper: Paper,
    MuiDrawer: Drawer,
    // MuiDivider: Divider,

    MuiButtonBase: ButtonBase,
    MuiButton: Button,
    MuiIconButton: IconButton,
    MuiInputAdornment: InputAdornment,

    MuiTextField: TextField,
    MuiFilledInput: FilledInput,
    // MuiOutlinedInput: OutlinedInput,
    // MuiInputLabel: InputLabel,
    // MuiFormHelperText: FormHelperText,
    MuiInputBase: InputBase,
    MuiInput: Input,

    // MuiFormControlLabel: FormControlLabel,

    // MuiSelect: Select,
    MuiStack: Stack,
    // MuiCheckbox: Checkbox,
    // MuiRadio: Radio,
    // MuiPagination: Pagination,
    // MuiPaginationItem: PaginationItem,
    // MuiTablePagination: TablePagination,
    // MuiChip: Chip,
    // MuiSwitch: Switch,
    // MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    // MuiMenu: Menu,
    // MuiMenuItem: MenuItem,
    MuiToolbar: Toolbar,
    // MuiTooltip: Tooltip,
    // MuiTabs: Tabs,
    // MuiTab: Tab,

    // MuiAvatar: Avatar,

    // MuiTableContainer: TableContainer,
    // MuiTable: Table,
    // MuiTableCell: TableCell,
    // MuiDataGrid: DataGrid,
    // MuiTableSortLabel: TableSortLabel,
    // MuiCssBaseline: CssBaseline,

    MuiLink: Link,
  },
});

// Add custom shadows to theme
// shadows.forEach((shadow, index) => {
//   theme.shadows[index + 1] = shadow;
// });
