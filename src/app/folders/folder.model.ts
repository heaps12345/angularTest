import { File } from '../files/file.model';

export interface Folder {
  id: number;
  foldername: string;
  files?: [File] | null;
  state?: 'sharedWithMe' | 'SharedWithOthers' | null;
}