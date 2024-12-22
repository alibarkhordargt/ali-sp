export const convertToBuffer = (docBase64Str: string): Buffer => {
  if (docBase64Str.includes('base64,'))
    docBase64Str = docBase64Str.split('base64,')[1];

  return Buffer.from(docBase64Str, 'base64');
};

export const convertToBase64 = (file: Buffer): string =>
  file.toString('base64');
