import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSpinner = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt={50}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;