import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import type {} from '@mui/x-data-grid/themeAugmentation';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    disableColumnMenu: true,
    disableRowSelectionOnClick: true,
  },
  styleOverrides: {
    root: {
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
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
