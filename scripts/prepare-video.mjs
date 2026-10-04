import { createReadStream, createWriteStream } from 'node:fs';
import { readFile, rename, stat, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const file = 'public/videos/ava-captions-stream-v4.mp4';
const info = await stat(file);
if (info.size < 1024) {
  const pointer = await readFile(file, 'utf8');
  const oid = pointer.match(/^oid sha256:([a-f0-9]{64})$/m)?.[1];
  const size = Number(pointer.match(/^size (\d+)$/m)?.[1]);
  if (!oid || !size) throw new Error('Invalid video LFS pointer');
  const revision = process.env.VERCEL_GIT_COMMIT_SHA || 'main';
  const url = `https://media.githubusercontent.com/media/stephanemalho/ava-template/${revision}/${file}`;
  const response = await fetch(url);
  if (!response.ok || !response.body) throw new Error(`Video download failed: ${response.status}`);
  const temporary = `${file}.download`;
  try {
    await pipeline(Readable.fromWeb(response.body), createWriteStream(temporary));
    if ((await stat(temporary)).size !== size) throw new Error('Video size mismatch');
    const hash = createHash('sha256');
    for await (const chunk of createReadStream(temporary)) hash.update(chunk);
    if (hash.digest('hex') !== oid) throw new Error('Video checksum mismatch');
    await rename(temporary, file);
    console.log('Original video downloaded and verified.');
  } catch (error) {
    await unlink(temporary).catch(() => {});
    throw error;
  }
}
