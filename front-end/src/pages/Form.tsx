import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PageWrapper from '../components/PageWrapper';
import { SignerInf } from '../types/interfaces';

const signerInfSchema = yup
  .object({
    firstName: yup
      .string()
      .required('First name is required!')
      .min(3, 'First name must be at least 3 characters!'),
    lastName: yup
      .string()
      .required('Last name is required!')
      .min(3, 'Last name must be at least 3 characters!'),
    age: yup
      .number()
      .required()
      .min(18, "Age can't be less than 18!")
      .max(80, "Age can't be more than 80!")
      .typeError('Age is required & it must be a number!'),
    phoneNumber: yup
      .string()
      .required('Phone number is required!')
      .matches(
        /^09\d{9}$/,
        'Phone number must start with 09 and be 11 digits!',
      ),
    nationalId: yup
      .string()
      .required('National id is required!')
      .matches(/^\d{10}$/, 'National id must be a 10 digit number!'),
  })
  .required();

const FormPage: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signerInfSchema),
  });

  const onSubmit = (signerInf: SignerInf) =>
    navigate('/sign', { state: signerInf });

  return (
    <PageWrapper>
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Signer Information
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TextField
          {...register('firstName')}
          label="First Name"
          variant="outlined"
          margin="normal"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          sx={{
            width: '100%',
            maxWidth: '300px',
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'primary.main',
            },
          }}
        />
        <TextField
          {...register('lastName')}
          label="Last Name"
          variant="outlined"
          margin="normal"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          sx={{
            width: '100%',
            maxWidth: '300px',
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'primary.main',
            },
          }}
        />
        <TextField
          {...register('age')}
          label="Age"
          variant="outlined"
          margin="normal"
          error={!!errors.age}
          helperText={errors.age?.message}
          sx={{
            width: '100%',
            maxWidth: '300px',
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'primary.main',
            },
          }}
        />
        <TextField
          {...register('phoneNumber')}
          label="Phone Number"
          variant="outlined"
          margin="normal"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          sx={{
            width: '100%',
            maxWidth: '300px',
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'primary.main',
            },
          }}
        />
        <TextField
          {...register('nationalId')}
          label="National Id"
          variant="outlined"
          margin="normal"
          error={!!errors.nationalId}
          helperText={errors.nationalId?.message}
          sx={{
            width: '100%',
            maxWidth: '300px',
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'primary.main',
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
            width: '100%',
            maxWidth: '300px',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              fontSize: '1rem',
              padding: '10px 20px',
              borderRadius: '16px',
              width: '100%',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default FormPage;
