var moment = require('moment');
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FileService {
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
  }

  deleteFile(fileToRemove) {
    this.db
      .collection('myFiles')
      .doc(`${fileToRemove.id}`)
      .delete();

    this.getMyFiles();
  }

  private addFileToDB(file) {
    this.db.collection('myFiles').add(file);
  }
}
