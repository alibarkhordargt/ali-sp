import { forwardRef, ReactElement, Ref, useState, FC } from 'react';
import { useLocation } from 'react-router-dom';
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
  Slide,
} from '@mui/material';
import { PictureAsPdf, Description } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';
import generatePdf from '../utils/generatePdf';
import generateExcel from '../utils/generateExcel';
import { useSendUnsignedDocMutation } from '../services/sendUnsignedDocApi';
import PageWrapper from '../components/PageWrapper';
import { PdfUseCases } from '../types/enums';
import { SignerInf, UploadDocDto } from '../types/interfaces';
import { sendUnsignedDocResDto } from '../types/dtos';

const DialogTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignPage: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const [sendUnsignedDoc] = useSendUnsignedDocMutation();

  const signerInf: SignerInf = location.state;

  const preHandleSign = () => {
    setOpenModal(false);
    setTimeout(handleSign, 100);
  };

  const handleSign = async () => {
    const docBase64 = generatePdf(PdfUseCases.Base64, signerInf);
    const uploadDocBodyParams: UploadDocDto = {
      doc: docBase64,
      nationalId: signerInf.nationalId,
      phoneNumber: signerInf.phoneNumber,
    };

    const { gatewayLink }: sendUnsignedDocResDto = await sendUnsignedDoc(
      uploadDocBodyParams,
    ).unwrap();

    window.location.href = gatewayLink;

    setOpenModal(false);
  };

  const handleDownloadPdf = () => {
    generatePdf(PdfUseCases.Download, signerInf);
  };

  const handleDownloadExcel = () => {
    generateExcel(signerInf);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <PageWrapper>
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Signer Information
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'downloadPdfButton.main',
            color: 'white',
            '&:hover': { backgroundColor: 'downloadPdfButton.dark' },
            padding: '6px 12px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            textTransform: 'none',
          }}
          onClick={handleDownloadPdf}
        >
          <PictureAsPdf sx={{ marginRight: 1, fontSize: '18px' }} />
          Download PDF
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'downloadExcelButton.main',
            color: 'white',
            '&:hover': { backgroundColor: 'downloadExcelButton.dark' },
            padding: '6px 12px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            textTransform: 'none',
          }}
          onClick={handleDownloadExcel}
        >
          <Description sx={{ marginRight: 1, fontSize: '18px' }} />
          Download Excel
        </Button>
      </Box>
      {signerInf && (
        <TableContainer
          component={Paper}
          sx={{ width: '100%', maxWidth: 600, marginTop: 4, marginBottom: 12 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  First Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Age
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Phone Number
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  National Id
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{signerInf.firstName}</TableCell>
                <TableCell>{signerInf.lastName}</TableCell>
                <TableCell>{signerInf.age}</TableCell>
                <TableCell>{signerInf.phoneNumber}</TableCell>
                <TableCell>{signerInf.nationalId}</TableCell>
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
          backgroundColor: 'primary.main',
          color: 'white',
          fontSize: '1rem',
          padding: '10px 20px',
          borderRadius: '16px',
          width: '60%',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
        onClick={handleOpenModal}
      >
        Confirm & Sign
      </Button>
      <Dialog
        maxWidth="xl"
        TransitionComponent={DialogTransition}
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{ sx: { borderRadius: '16px' } }}
      >
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
              padding: '6px 12px',
              fontSize: '15px',
              borderRadius: '12px',
              backgroundColor: 'background.default',
              color: 'black',
              '&:hover': { backgroundColor: 'grey.500' },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={preHandleSign}
            sx={{
              padding: '6px 12px',
              fontSize: '15px',
              borderRadius: '12px',
              backgroundColor: 'primary.main',
              color: 'white',
              textTransform: 'none',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Sign
          </Button>
        </DialogActions>
      </Dialog>
    </PageWrapper>
  );
};

export default SignPage;
