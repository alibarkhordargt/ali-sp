import { FC, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useReceiveSignedDocMutation } from '../services/receiveSignedDocApi';
import PageWrapper from '../components/PageWrapper';
import { PictureAsPdf } from '@mui/icons-material';
import { receiveSignedDocResDto } from '../types/dtos';

const downloadPdfFile = (docBase64: string) => {
  const link = document.createElement('a');
  link.href = `data:application/pdf;base64,${docBase64}`;
  link.download = 'signed-document.pdf';
  link.click();
};

const SuccessPage: FC = () => {
  const { trackId } = useParams();
  const [receiveSignedDoc] = useReceiveSignedDocMutation();

  const handleDownloadDoc = useCallback(async () => {
    if (trackId) {
      const { doc: docBase64 }: receiveSignedDocResDto = await receiveSignedDoc(
        { trackId },
      ).unwrap();

      downloadPdfFile(docBase64);
    }
  }, [receiveSignedDoc, trackId]);

  return (
    <PageWrapper>
      <Typography
        color="#5cb85c"
        variant="h4"
        component="h1"
        sx={{ marginBottom: 2 }}
      >
        &#x2705; Signed Successfully!
      </Typography>
      <Typography variant="h6">
        The document has been successfully signed.
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        You can download it. &#x1F447;
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#5cb85c',
          color: 'white',
          '&:hover': { backgroundColor: '#28a745' },
          padding: '12px 24px',
          fontSize: '1.2rem',
          display: 'flex',
          borderRadius: '16px',
          textTransform: 'none',
        }}
        onClick={handleDownloadDoc}
      >
        <PictureAsPdf
          sx={{
            marginRight: 1,
            fontSize: '18px',
          }}
        />
        Download PDF
      </Button>
    </PageWrapper>
  );
};

export default SuccessPage;
