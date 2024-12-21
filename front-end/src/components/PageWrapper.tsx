import { FC } from 'react';
import { Container } from '@mui/material';
import BackButton from './BackButton'; // Assuming you have the BackButton component
import SnackbarComponent from './ErrorSnackbar';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import { selectLoading } from '../store/slices/loadingSlice';
import { PageWrapperProps } from '../types/interfaces';

const PageWrapper: FC<PageWrapperProps> = ({
  welcomePage = false,
  children,
}) => {
  const loading = useSelector(selectLoading);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      {loading && <Loading />}
      {!welcomePage && (
        <>
          <BackButton />
          <SnackbarComponent />
        </>
      )}
      {children}
    </Container>
  );
};

export default PageWrapper;
