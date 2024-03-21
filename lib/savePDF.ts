import { z } from 'zod';

const MAX_FILE_SIZE = 300 * 1_000_000;
import { mkdir, rm, unlink, writeFile } from 'fs/promises';
import { dirname, join } from 'path';

export const ACCEPTED_IMAGE_TYPES = ['application/pdf']

// refile คือการทดสอบต่อจาก .custom
export const image = z
  .custom<File | null>((image) => image instanceof File, 'Image is required')
  .refine(
    (image) => image && image.size <= MAX_FILE_SIZE,
    'Max file size is 300 MB',
  )
  .refine(
    (image) => image && ACCEPTED_IMAGE_TYPES.includes(image.type),
    'Invalid image type (.pdf)',
  );

export const saveFile = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const folderName = crypto.randomUUID();
  const fileName = file.name;
  await mkdir(join('public', 'pdf_uploaded', folderName), { recursive: true });

  const path = join('public', 'pdf_uploaded', folderName, fileName);
  await writeFile(path, buffer);

  return `${folderName}/${fileName}`;
};

export const removeFile = (path: string) => {
  return unlink(join('public', 'pdf_uploaded', path));
};

export const removeDirFromFile = (path: string) => {
  const dir = join('public', 'pdf_uploaded', dirname(path));

  return rm(dir, { recursive: true, force: true });
};