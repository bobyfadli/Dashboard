import { Box, Button, Paper, Portal, Stack, Typography } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomPagination from 'components/common/CustomPagination';

import { columns, rows } from 'data/dashboard/ReminderTableData';

function CustomSearchToolbar() {
  return (
    <>
      <Portal container={() => document.getElementById('filter-panel')!}>
        <GridToolbarQuickFilter />
      </Portal>
    </>
  );
}

const ReminderTable = () => {
  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(2, 2.5),
        width: 1,
      })}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="h4" color="common.black">
          Reminder
        </Typography>

        <Box
          id="filter-panel"
          sx={(theme) => ({
            '& .MuiDataGrid-toolbarQuickFilter': {
              border: theme.shape.borderRadius - 2,
              borderRadius: theme.shape.borderRadius * 2,
              borderColor: theme.palette.neutral.light,
              p: theme.spacing(0, 0, 0, 1),
            },
          })}
        />

        <Button
          variant="contained"
          color="secondary"
          sx={(theme) => ({
            p: theme.spacing(0.75, 1.5),
            borderRadius: 1.5,
          })}
          startIcon={<IconifyIcon icon="heroicons-solid:plus" />}
        >
          <Typography variant="body2">Add New</Typography>
        </Button>
      </Stack>

      <Box
        sx={{
          height: 400,
          width: 1,
          mt: 1.75,
        }}
      >
        <DataGrid
          pagination
          rows={rows}
          columns={columns}
          slots={{
            toolbar: CustomSearchToolbar,
            pagination: CustomPagination,
          }}
          // slotProps={{
          //   toolbar: {},
          // }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default ReminderTable;
