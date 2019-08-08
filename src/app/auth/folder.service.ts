import { Folder } from './folder.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FolderService {
  MyFolders: Folder[] = [
    { id: 1, foldername: 'folder 1' },
    { id: 2, foldername: 'folder 2' },
    { id: 3, foldername: 'folder 3' },
    { id: 4, foldername: 'folder 4' }
  ];

  constructor(private db: AngularFirestore) {}

  getMyFolders() {
    return this.db.collection('myFolders').valueChanges();
  }

  addFolder() {
    
    this.addFolderToDB({ foldername: 'new folder' });
    this.getMyFolders();
    console.log(this.MyFolders);
  }

  private addFolderToDB(folder) {
    this.db.collection('myFolders').add(folder);
  }
}
