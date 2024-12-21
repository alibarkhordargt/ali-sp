import { FC } from 'react';
import { Card, Box, CircularProgress } from '@mui/material';

const Loading: FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'loadingBg.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
          backgroundColor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Box>
          <CircularProgress
            disableShrink
            size={60}
            sx={{ color: 'primary.main' }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default Loading;
