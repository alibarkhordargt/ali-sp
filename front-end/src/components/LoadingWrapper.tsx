import { FC } from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import { selectLoading } from '../store/slices/loadingSlice';
import { LoadingWrapperProps } from '../types/interfaces';

const LoadingWrapper: FC<LoadingWrapperProps> = ({ children }) => {
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
};

export default LoadingWrapper;
