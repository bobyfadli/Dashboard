import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';
import ListItemButton from './components/ListItemButton';
import ListItemText from './components/ListItemText';
import ListItemIcon from './components/ListItemIcon';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: Button,
    MuiListItemButton: ListItemButton,
    MuiListItemText: ListItemText,
    MuiListItemIcon: ListItemIcon,
    // MuiButtonBase: ButtonBase,
    // MuiAppBar: AppBar,
    // MuiPaper: Paper,
    // MuiDivider: Divider,

    //! input fields
    // MuiTextField: TextField,
    // MuiFilledInput: FilledInput,
    // MuiOutlinedInput: OutlinedInput,
    // MuiInputLabel: InputLabel,
    // MuiInputAdornment: InputAdornment,
    // MuiFormHelperText: FormHelperText,
    // MuiInput: Input,
    // MuiFormControlLabel: FormControlLabel,
    //* ----------
    // MuiSelect: Select,
    // MuiStack: Stack,
    // MuiCheckbox: Checkbox,
    // MuiRadio: Radio,
    // MuiPagination: Pagination,
    // MuiPaginationItem: PaginationItem,
    // MuiTablePagination: TablePagination,

    // MuiMenu: Menu,
    // MuiMenuItem: MenuItem,
    // MuiToolbar: Toolbar,
    // MuiTooltip: Tooltip,
    // MuiTabs: Tabs,
    // MuiTab: Tab,
    // MuiCircularProgress: CircularProgress,
    // MuiLinearProgress: LinearProgress,
    // MuiAvatar: Avatar,
    // MuiAvatarGroup: AvatarGroup,
    // MuiAccordionDetails: AccordionDetails,
    // MuiTableContainer: TableContainer,
    // MuiTable: Table,
    // MuiTableCell: TableCell,
    // MuiDataGrid: DataGrid,
    // MuiTableSortLabel: TableSortLabel,
    // MuiCssBaseline: CssBaseline,
    // MuiIconButton: IconButton,
    // MuiLink: Link,
  },
});
