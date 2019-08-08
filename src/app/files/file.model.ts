export interface File {
  id: number;
  filename: string;
  fileToDownload?: string;
  dateAdded?: Date;
  state?: 'sharedWithMe' | 'SharedWithOthers' | null;
}