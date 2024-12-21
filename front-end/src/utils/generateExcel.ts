import * as XLSX from 'xlsx';
import { SignerInf } from '../types/interfaces';

const generateExcel = (signerInf: SignerInf): void => {
  const worksheetData = {
    'First Name': signerInf.firstName,
    'Last Name': signerInf.lastName,
    Age: signerInf.age,
    'Phone Number': signerInf.phoneNumber,
    'National Id': signerInf.nationalId,
  };

  const worksheet = XLSX.utils.json_to_sheet([worksheetData]);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Signer Information');
  XLSX.writeFile(workbook, 'signer-information.xlsx');
};

export default generateExcel;
