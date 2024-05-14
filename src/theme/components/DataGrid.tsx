import { Theme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { Components } from '@mui/material/styles/components';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    disableColumnMenu: true,
    disableRowSelectionOnClick: true,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableDensitySelector: true,
  },
  styleOverrides: {
    root: {
      borderLeft: 1,
      borderRight: 1,
    },

    columnHeader: {
      paddingLeft: 0,
      '&:focus-within': { outline: 'none' },
    },

    columnHeaderTitle: ({ theme }) => ({
      color: theme.palette.grey[600],
    }),

    cell: ({ theme }) => ({
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: theme.typography.fontSize - 1,
      '&:focus': {
        outline: 'none',
      },
    }),

    columnSeparator: {
      display: 'none',
    },

    sortIcon: ({ theme }) => ({
      color: theme.palette.primary.main,
    }),
  },
};

export default DataGrid;
