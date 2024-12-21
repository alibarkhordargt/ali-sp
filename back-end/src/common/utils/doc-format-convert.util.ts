export const convertToBuffer = (docBase64Str: string): Buffer => {
  let docBase64 = docBase64Str;

  if (docBase64Str.includes('base64,'))
    docBase64 = docBase64Str.split('base64,')[1];

  const docBuffer = Buffer.from(docBase64, 'base64');
  return docBuffer;
};

export const convertToBase64 = (file: Buffer): string => {
  return file.toString('base64');
};
