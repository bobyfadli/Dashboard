import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'description', headerName: 'Description', width: 180 },
  {
    field: 'due',
    headerName: 'Due',
    width: 180,
  },
  {
    field: 'overdue',
    headerName: 'Overdue',
    width: 180,
  },
  {
    field: 'notify',
    headerName: 'Notify',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
  },
];

const rows = [
  {
    id: 1,
    description: 'Urgent Safety Recall',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'David Demo',
    status: 'Completed',
  },
  {
    id: 2,
    description: 'Urgent Safety Recall',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'David Demo',
    status: 'Completed',
  },
];

const Reminder = () => {
  return (
    <Box sx={{ backgroundColor: 'white', p: '16px 20px', borderRadius: '14px' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Reminder</Typography>
        <Button variant="contained" color="secondary">
          + Add New
        </Button>
      </Stack>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          sx={{ border: 0 }}
        />
      </Box>
    </Box>
  );
};

export default Reminder;
