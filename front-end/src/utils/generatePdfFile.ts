import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UseCases } from '../types/enums';

const generatePdfFile = (data: any, useCase: UseCases): Blob | void => {
  const doc = new jsPDF();

  // Add title
  doc.setFontSize(18);
  doc.text('Signer Information', 105, 20, { align: 'center' });

  // Define the table columns and rows
  const tableColumnHeaders = ['First Name', 'Last Name', 'Age', 'Phone Number'];
  const tableRows = [
    [data.firstName, data.lastName, data.age, data.phoneNumber],
  ];

  // Custom style for table header
  const headStyles = {
    fillColor: '#66bb6a', // Green color for header
    textColor: 'white', // White text color for header
  };

  // Generate the table
  doc.autoTable({
    startY: 30,
    head: [tableColumnHeaders],
    body: tableRows,
    headStyles: headStyles, // Apply custom styles
  });

  if (useCase === UseCases.Blob) {
    return doc.output('blob');
  } else if (useCase === UseCases.Download) doc.save('FormData.pdf');
};

export default generatePdfFile;
