import { Box, Button, Paper, Portal, Stack, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomPagination from 'components/common/CustomPagination';
import Search from 'components/icons/Common/Search';

import { columns, rows } from 'data/dashboard/ReminderTableData';

function CustomSearchToolbar() {
  return (
    <>
      <Portal container={() => document.getElementById('filter-panel')!}>
        <GridToolbarQuickFilter placeholder="Search here" />
      </Portal>
    </>
  );
}

function CustomSearchIcon() {
  const theme = useTheme();

  return <Search fontSize="inherit" htmlColor={theme.palette.neutral.main} />;
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
              border: theme.shape.borderRadius - 3,
              borderRadius: 2,
              borderColor: theme.palette.neutral.light,
              backgroundColor: theme.palette.neutral.lighter,
              p: theme.spacing(0, 0, 0, 1),
              '& ::placeholder': {
                color: theme.palette.neutral.darker,
              },
              '& input': {
                ml: theme.spacing(1),
              },
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
            quickFilterIcon: CustomSearchIcon,
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
