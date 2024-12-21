import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import PageWrapper from '../components/PageWrapper';

const WelcomePage: FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/form');
  };

  return (
    <PageWrapper welcomePage={true}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: 4 }}>
        Welcome to Ali SP
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={handleStartClick}
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            fontSize: '1.2rem',
            padding: '12px 24px',
            borderRadius: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Start
        </Button>
      </Box>
    </PageWrapper>
  );
};

export default WelcomePage;
