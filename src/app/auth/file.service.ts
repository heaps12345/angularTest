import { File } from './file.model';
import moment from 'moment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FileService {
  myFiles: File[] = [
    { id: 1, filename: 'file 1' },
    { id: 2, filename: 'file 2' },
    { id: 3, filename: 'file 3' },
    { id: 4, filename: 'file 4' }
  ];

  constructor(private db: AngularFirestore) {}

  getMyFiles() {
    return this.db.collection('myFiles').valueChanges();
  }

  addFile(form) {
    const fileToReplace = form.value.filename.replace(/^.*[\\\/]/, '');
    const fileToSplit = fileToReplace
      .split('.')
      .slice(0, -1)
      .join('.');
    const newDate = new Date();
    const momentDate = moment(newDate).format('MM/DD/YYYY');
    this.addFileToDB({
      fileToDownload: form.value.filename,
      filename: fileToSplit,
      dateAdded: momentDate
    });

    this.getMyFiles();
    console.log(this.myFiles);
  }

  deleteFile(fileToRemove) {
    this.myFiles.filter(file => file !== fileToRemove);
    this.getMyFiles();
    console.log(this.myFiles);
  }

  private addFileToDB(file) {
    this.db.collection('myFiles').add(file);
  }
}
