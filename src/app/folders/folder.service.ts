import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FolderService {
  constructor(private db: AngularFirestore) {}

  getMyFolders() {
    return this.db.collection('myFolders').valueChanges();
  }

  addFolder() {
    this.addFolderToDB({ foldername: 'Folder Name' });
    this.getMyFolders();
  }

  deleteFolder(folderToRemove) {
    this.db
      .collection('myFolders')
      .doc(`${folderToRemove.id}`)
      .delete();

    this.getMyFolders();
  }

  private addFolderToDB(folder) {
    this.db.collection('myFolders').add(folder);
  }
}
