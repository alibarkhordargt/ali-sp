import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import PageWrapper from '../components/PageWrapper';

const FailPage: FC = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginBottom: 2, color: 'error.main' }}
      >
        &#x274C; Sign Failed!
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        Document signing process failed. Please try again!
      </Typography>
      <Button
        variant="contained"
        onClick={handleRetry}
        sx={{
          backgroundColor: 'error.main',
          color: 'white',
          fontSize: '1.2rem',
          padding: '12px 24px',
          borderRadius: '16px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'error.dark',
          },
        }}
      >
        Try Again!
      </Button>
    </PageWrapper>
  );
};

export default FailPage;
