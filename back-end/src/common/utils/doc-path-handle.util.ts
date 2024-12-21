import { promises as fs } from 'fs';

export const storeDoc = async (
  path: string,
  docBuffer: Buffer,
): Promise<void> => {
  await fs.writeFile(path, docBuffer);
};

export const renderDoc = async (path: string): Promise<Buffer> => {
  const docBuffer = await fs.readFile(path);

  return docBuffer;
};
