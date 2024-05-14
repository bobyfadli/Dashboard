import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomPagination from 'components/common/CustomPagination';
import { columns, rows } from 'data/dashboard/ReminderTableData';

const ReminderTable = () => {
  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(2, 2.5),
        width: 1,
      })}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" color="common.black">
          Reminder
        </Typography>

        {/* <SearchBox /> */}

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
            pagination: CustomPagination,
            // toolbar: GridToolbar,
          }}
          // slotProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //   },
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
