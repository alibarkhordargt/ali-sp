import * as XLSX from "xlsx";

const generateExcelFile = (data: any) => {
  const orderedData = {
    "First Name": data.firstName,
    "Last Name": data.lastName,
    Age: data.age,
    "Phone Number": data.phoneNumber,
  };

  const worksheet = XLSX.utils.json_to_sheet([orderedData]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");
  XLSX.writeFile(workbook, "FormData.xlsx");
};

export default generateExcelFile;
