import { Theme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { Components } from '@mui/material/styles/components';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: { disableColumnMenu: true, disableRowSelectionOnClick: true },
  styleOverrides: {
    root: {
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
      fontSize: theme.typography.fontSize * 0.928,
      '&:focus': {
        outline: 'none',
      },
    }),

    columnSeparator: {
      display: 'none',
    },
  },
};

export default DataGrid;
