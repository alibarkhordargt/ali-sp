import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { PdfUseCases } from '../types/enums';
import { SignerInf } from '../types/interfaces';

const generatePdf = (
  PdfUseCase: PdfUseCases,
  signerInf: SignerInf,
): string | void => {
  const doc = new jsPDF();

  const tableHeads = [
    'First Name',
    'Last Name',
    'Age',
    'Phone Number',
    'National Id',
  ];
  const tableRows = [
    [
      signerInf.firstName,
      signerInf.lastName,
      signerInf.age,
      signerInf.phoneNumber,
      signerInf.nationalId,
    ],
  ];
  const headStyles = {
    fillColor: '#66bb6a',
    textColor: 'white',
  };

  doc.setFontSize(18);
  doc.text('Signer Information', 105, 20, { align: 'center' });
  doc.autoTable({
    startY: 30,
    head: [tableHeads],
    body: tableRows,
    headStyles,
  });

  if (PdfUseCase === PdfUseCases.Base64) {
    return doc.output('dataurlstring');
  } else if (PdfUseCase === PdfUseCases.Download) {
    doc.save('unsigned-document.pdf');
  }
};

export default generatePdf;
