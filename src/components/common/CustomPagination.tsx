import { Typography, Stack, Pagination } from '@mui/material';
import {
  gridPageSelector,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
  gridPageSizeSelector,
} from '@mui/x-data-grid';

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const rowsCount = apiRef.current.getRowsCount();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
      <Typography variant="body2" color="grey.600">
        Showing {`${page * pageSize + 1}-${page * pageSize + pageSize} of ${rowsCount}`}
      </Typography>
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => {
          event.preventDefault();
          apiRef.current.setPage(value - 1);
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
