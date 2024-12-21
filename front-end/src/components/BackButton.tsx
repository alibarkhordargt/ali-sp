import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <IconButton
      onClick={handleBackClick}
      sx={{
        position: 'absolute',
        left: '10px',
        top: '10px',
        color: 'text.primary',
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
