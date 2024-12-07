import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Container,
  Slide,
} from '@mui/material';

import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';
import {
  SaveAlt,
  PictureAsPdf,
  Description,
  BorderRight,
  BorderRightSharp,
} from '@mui/icons-material'; // Icons for PDF and Excel
import { TransitionProps } from '@mui/material/transitions';
import generatePdfFile from '../utils/generatePdfFile';
import generateExcelFile from '../utils/generateExcelFile';
import { useUploadFileMutation } from '../services/apiSlice';
import { UseCases } from '../types/enums';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const { state } = useLocation() || {};
  const formData = state;

  const [uploadFile] = useUploadFileMutation();

  const handleSign = async () => {
    try {
      const pdfFile = generatePdfFile(formData, UseCases.Blob) as Blob; // Generate the Blob

      const fileData = new FormData();
      fileData.append('file', pdfFile, 'signer_info.pdf'); // Append Blob to FormData

      await uploadFile(fileData).unwrap(); // Upload the file using RTK Query
      console.log('pdfFile:', pdfFile);

      alert('File signed and submitted successfully!');
    } catch (error) {
      console.error('Error signing file:', error);
      alert('An error occurred while submitting the file.');
    } finally {
      setOpenModal(false);
    }
  };

  const handleDownloadPdf = () => {
    generatePdfFile(formData, UseCases.Download);
    console.log('Downloading PDF');
  };

  const handleDownloadExcel = () => {
    generateExcelFile(formData);
    console.log('Downloading Excel');
  };

  const handleOpenModal = () => {
    setOpenModal(true); // Open the confirmation modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal without signing
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <BackButton /> {/* Place the BackButton here */}
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Signer Information
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff4537',
            color: 'white',
            '&:hover': { backgroundColor: '#e10000' }, // Slightly darker red on hover
            padding: '6px 12px', // Smaller size
            fontSize: '14px', // Smaller font size
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={handleDownloadPdf}
        >
          <PictureAsPdf sx={{ marginRight: 1, fontSize: '18px' }} />{' '}
          {/* Smaller icon */}
          Download PDF
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#197141',
            color: 'white',
            '&:hover': { backgroundColor: '#145c33' }, // Slightly darker green on hover
            padding: '6px 12px', // Smaller size
            fontSize: '14px', // Smaller font size
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={handleDownloadExcel}
        >
          <Description sx={{ marginRight: 1, fontSize: '18px' }} />{' '}
          {/* Smaller icon */}
          Download Excel
        </Button>
      </Box>
      {formData && (
        <TableContainer
          component={Paper}
          sx={{ width: '100%', maxWidth: 600, marginTop: 4, marginBottom: 12 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: '#66bb6a',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  First Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: '#66bb6a',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: '#66bb6a',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Age
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: '#66bb6a',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Phone Number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{formData.firstName}</TableCell>
                <TableCell>{formData.lastName}</TableCell>
                <TableCell>{formData.age}</TableCell>
                <TableCell>{formData.phoneNumber}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: 2,
          backgroundColor: '#66bb6a', // Green background
          color: 'white',
          fontSize: '1rem', // Smaller font size
          padding: '10px 20px', // Smaller padding
          borderRadius: '16px',
          width: '60%', // Full width
          '&:hover': {
            backgroundColor: '#4caf50', // Darker green on hover
          },
        }}
        onClick={handleOpenModal}
      >
        Confirm & Sign
      </Button>
      <Dialog
        maxWidth="xl"
        TransitionComponent={Transition}
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{ sx: { borderRadius: '16px' } }}
      >
        {' '}
        {/* Apply border radius here */}
        <DialogTitle variant="h5">Confirm & Sign!</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Do you want to sign this document?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseModal}
            sx={{
              padding: '8px 16px', // Bigger button size
              fontSize: '16px', // Bigger font size
              borderRadius: '12px',
              backgroundColor: '#f5f5f5', // Gray background to match page bg
              color: 'black',
              '&:hover': { backgroundColor: '#e0e0e0' }, // Darker gray on hover
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSign}
            sx={{
              padding: '8px 16px', // Bigger button size
              fontSize: '16px', // Bigger font size
              borderRadius: '12px',
              backgroundColor: '#66bb6a', // Green background for the "Sign" button
              color: 'white',
              '&:hover': { backgroundColor: '#4caf50' }, // Slightly darker green on hover
            }}
          >
            Sign
          </Button>
        </DialogActions>
      </Dialog>
    </Container>

    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     gap: 2,
    //     padding: 2,
    //   }}
    // >
    //   {/* Title */}
    //   <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
    //     Signer Information
    //   </Typography>

    //   {/* Table */}

    // </Box>
  );
};

export default SignPage;
